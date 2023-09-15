import { animated, easings, useSpring } from '@react-spring/web';
import { forwardRef, useMemo } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import './ProjectCard.scss';

const CARD_DIMENSIONS = { WIDTH: 200, HEIGHT: 150, PADDING: 10 };
const ROTATION_MAX_DEG = 10;

export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
  active: boolean;
}

interface Props {
  index: number;
  project: Project;
  setActiveProject: (project: Project) => void;
}

const ProjectCard = forwardRef<JSX.IntrinsicElements['li'], Props>(function({index, project, setActiveProject}, ref) {
  const { width } = useWindowDimensions();
  const rotation = index % ROTATION_MAX_DEG;

  const layoutSpring = useSpring({
    delay: 1000,
    duration: 500,
    from: {
      x: Math.random() * width,
      y: Math.random() * 50 + 10,
      rotate: (index % 2 === 0 ? -rotation : rotation)
    },
    to: {
      x: 0,
      y: (CARD_DIMENSIONS.HEIGHT * index) + (index > 0 ? 5 * index : 0),
      rotate: 0
    },
    config: {
      easing: easings.easeOutElastic
    }
  });

  const [bounceSpring, api] = useSpring(() => ({
    loop: true,
    duration: 200,
    pause: !project.active,
    from: {
      x: 0,
      y: 0,
    },
    to: async (next, cancel) => {
      await next({ x: 6 });
      await next({ x: 0 });
    },
    config: {
      easing: easings.easeInBounce,
      bounce: 100,
    }
  }), [project.active]);

  return (
    <animated.li className={'project-item-container'} style={{
        position: 'absolute',
        maxHeight: CARD_DIMENSIONS.HEIGHT,
        width: CARD_DIMENSIONS.WIDTH,
        ...layoutSpring,
      }}
      onClick={() => {
        setActiveProject(project);
        api.resume();
      }}>
      <animated.div className={'project-item'} style={{
        position: 'relative',
        ...bounceSpring
      }}>
        <img src={project.imageSrc} alt={project.imageAlt} />
      </animated.div>
    </animated.li>
  );
});

export { ProjectCard };