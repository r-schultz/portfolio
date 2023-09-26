import { animated, Controller, easings, SpringValue, useSpring } from '@react-spring/web';
import { forwardRef, useMemo, useImperativeHandle, useState } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import './ProjectCard.scss';

const CARD_DIMENSIONS = { WIDTH: 200, HEIGHT: 175, PADDING: 10 };
const ROTATION_MAX_DEG = 10;
const INITIAL_X_POS = -25;

export interface Project {
  id: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

interface Props {
  index: number;
  project: Project;
  setActiveProject: (project: Project) => void;
  onAnimationComplete: (project: Project) => void;
}

export type ProjectHandle = {
  reset: () => void;
};

const ProjectCard = forwardRef<ProjectHandle, Props>(function({index, project, setActiveProject, onAnimationComplete}, ref) {
  const { width } = useWindowDimensions();
  const rotation = index % ROTATION_MAX_DEG;
  const [active, setActive] = useState<boolean>(false);

  const [layoutSpring, layoutAPI] = useSpring(() => ({
    delay: 1250,
    duration: 500,
    from: {
      x: (Math.random() * width / 2) + 200,
      y: (Math.random() * 100) + 114,
      rotate: (index % 2 === 0 ? -rotation : rotation),
      scale: 1.6
    },
    to: {
      x: INITIAL_X_POS,
      y: (CARD_DIMENSIONS.HEIGHT * index) + (index > 0 ? 20 * index : 0),
      rotate: 0,
      scale: 1
    },
    config: {
      easing: easings.easeOutElastic
    },
    onRest() {
      onAnimationComplete(project);
    }
  }));

  // const slideController = useMemo(() => {
  //   const slideSpring = new SpringValue({
  //     from: {
  //       x: INITIAL_X_POS,
  //     },
  //     to: {
  //       x: 25,
  //     },
  //   });
  //   return new Controller({ from: slideSpring, reverse: active });
  // }, [active]);

  const [slideSpring, slideAPI] = useSpring(() => ({
    pause: true,
    duration: 200,
    reverse: active,
    from: {
      x: INITIAL_X_POS,
    },
    to: {
      x: 25,
    },
    config: {
      easing: easings.easeInBounce,
      bounce: 1000,
    }
  }), [active]);

  useImperativeHandle(ref, () => {
    return {
      reset() {
        setActive(false);
        slideAPI.start();
      }
    }
  });

  return (
    <animated.li className={'project-item-container'} style={{
        ...layoutSpring,
      }}
      onClick={() => {
        setActiveProject(project);
        slideAPI.start();
        setActive(true);
      }}>
        <animated.div className={`project-item ${active ? 'active' : ''}`} style={{
          width: CARD_DIMENSIONS.WIDTH,
          ...slideSpring
        }}>
          <p>{project.title}</p>
          <img src={project.imageSrc} alt={project.imageAlt} />
        </animated.div>
    </animated.li>
  );
});

export { ProjectCard };