import { animated, easings, useSpring } from '@react-spring/web';
import { forwardRef, useImperativeHandle, useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import type { Project } from '@/components/pages/projects';
import './ProjectCard.scss';

const CARD_DIMENSIONS = { WIDTH: 200, HEIGHT: 175, PADDING: 10 };
const ROTATION_MAX_DEG = 10;
const INITIAL_X_POS = -25;

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

  const [layoutSpring] = useSpring(() => ({
    delay: 1250,
    duration: 500,
    from: {
      x: (Math.random() * width / 2) + 180,
      y: (Math.random() * 75) + 50,
      rotate: (index % 2 === 0 ? -rotation : rotation),
      scale: 1.6
    },
    to: {
      x: INITIAL_X_POS,
      y: (CARD_DIMENSIONS.HEIGHT * index) + (index > 0 ? CARD_DIMENSIONS.PADDING * index : 0),
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

  const [slideSpring, slideAPI] = useSpring(() => ({
    duration: 200,
    x: INITIAL_X_POS,
    config: {
      easing: easings.easeInBounce,
      bounce: 1000,
    }
  }));

  useImperativeHandle(ref, () => {
    return {
      reset() {
        setActive(false);
        slideAPI.start({ x: INITIAL_X_POS });
      }
    }
  });

  const handleSetActive = () => {
    setActiveProject(project);
    setActive(true);
    slideAPI.start({ x: 25 });
  };

  return (
    <animated.li tabIndex={index} className={'project-item-container'} style={{
        ...layoutSpring,
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleSetActive();
        }
      }}
      onClick={handleSetActive}>
        <animated.div className={`project-item ${active ? 'active' : ''}`} style={{
          width: CARD_DIMENSIONS.WIDTH,
          ...slideSpring
        }}>
          <p>{project.title}</p>
          <img src={project.image.src} alt={project.image.alt} />
        </animated.div>
    </animated.li>
  );
});

export default ProjectCard;