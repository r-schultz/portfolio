import { animated, easings, useSpring } from '@react-spring/web';
import { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import type { Project } from '@/components/pages/projects';
import './ProjectCard.scss';

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
  const [active, setActive] = useState<boolean>(false);

  const dimensions = useMemo(() => {
    return {
      INITIAL_X: width > 600 ? -25 : -50,
      SELECTED_X: width > 600 ? 25 : 0,
      CARD: {
        WIDTH: width > 600 ? 200 : 150,
        HEIGHT: width > 600 ? 175 : 100,
        PADDING: 10
      },
      ROTATION_MAX_DEG: 10
    }
  }, [width]);

  const rotation = index % dimensions.ROTATION_MAX_DEG;
  const startX = Math.random() * Math.min(400, width) + Math.max((width / 2 - 200), 100);
  const startY = Math.random() * 200 + 50;

  const [layoutSpring] = useSpring(() => ({
    delay: 1250,
    from: {
      x: startX,
      y: startY,
      rotate: (index % 2 === 0 ? -rotation : rotation),
      scale: 1.8,
      zIndex: Math.floor((Math.random() * 20)) + 2,
    },
    to: {
      x: dimensions.INITIAL_X,
      y: (dimensions.CARD.HEIGHT * index) + (index > 0 ? dimensions.CARD.PADDING * index : 0),
      rotate: 0,
      scale: 1,
      zIndex: 2,
    },
    config: {
      duration: 2000,
      easing: easings.easeOutExpo,
    },
    onRest() {
      onAnimationComplete(project);
    }
  }), [width]);

  const [slideSpring, slideAPI] = useSpring(() => ({
    x: dimensions.INITIAL_X,
    config: {
      duration: 1000,
      easing: easings.easeOutExpo,
      bounce: 1000,
    }
  }), [width]);

  useImperativeHandle(ref, () => {
    return {
      reset() {
        setActive(false);
        slideAPI.start({ x: dimensions.INITIAL_X });
      }
    }
  });

  const handleSetActive = () => {
    setActiveProject(project);
    setActive(true);
    slideAPI.start({ x: dimensions.SELECTED_X });
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
          width: dimensions.CARD.WIDTH,
          ...slideSpring
        }}>
          <p>{project.title}</p>
          <img src={project.image.src} alt={project.image.alt} />
        </animated.div>
    </animated.li>
  );
});

export default ProjectCard;