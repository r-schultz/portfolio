import { Controller, animated, easings, useSpring } from '@react-spring/web';
import { createRef, useMemo } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import './projectCard.scss';

const LR_PADDING = 20;
const CARD_DIMENSIONS = { WIDTH: 300, HEIGHT: 350, PADDING: 10 };
const ROTATION_MAX_DEG = 8;

export interface Project {
  id: number,
  title: string;
  description: string;
  imageSrc?: string;
}

export function ProjectCard({index, project, setActiveProject}:
  {index: number, project: Project, setActiveProject: (project: Project) => void}) {

  const isBouncing = createRef();
  const bounceAnimation = new Controller({ opacity: 0 })

  const { width } = useWindowDimensions();
  const { itemsPerRow, xPos, yPos } = useMemo(() => {
    let maxItemsPerRow = 1;
    let availableWidth = width - (LR_PADDING * 2) - CARD_DIMENSIONS.WIDTH;
    let cardWithPadding = CARD_DIMENSIONS.WIDTH + CARD_DIMENSIONS.PADDING;
    while (availableWidth >= 0) {
      if (availableWidth - cardWithPadding >= 0) {
        maxItemsPerRow += 1;
        availableWidth -= cardWithPadding;
      } else {
        break;
      }
    }

    return {
      xPos: index % maxItemsPerRow,
      yPos: Math.floor(index / maxItemsPerRow),
      itemsPerRow: maxItemsPerRow
    }
  }, [width, index]);
  const rotation = xPos % ROTATION_MAX_DEG;

  const layoutSpring = useSpring({
    delay: 700,
    duration: 500,
    from: {
      x: 10,
      y: 10,
      rotate: (index % 2 === 0 ? -rotation : rotation)
    },
    to: {
      x: LR_PADDING + (CARD_DIMENSIONS.WIDTH * xPos) + (xPos % itemsPerRow ? (CARD_DIMENSIONS.PADDING * xPos) : 0),
      y: CARD_DIMENSIONS.HEIGHT * yPos,
      rotate: 0
    },
    config: {
      easing: easings.easeOutElastic
    }
  });

  const [bounceSpring, api] = useSpring(() => ({
    loop: true,
    duration: 200,
    pause: true,
    from: {
      x: 0,
      y: 0,
    },
    to: async (next, cancel) => {
      await next({ y: 4 });
      await next({ y: 0 });
    },
    config: {
      easing: easings.easeInElastic,
      bounce: 100,
    }
  }), []);

  return (
    <animated.li className={'project-item-container'} style={{
        position: 'absolute',
        maxHeight: CARD_DIMENSIONS.HEIGHT,
        width: CARD_DIMENSIONS.WIDTH,
        ...layoutSpring,
      }}
      onClick={() => {
        api.resume();
        setActiveProject(project)
      }}>
      <animated.div className={'project-item'} style={{
        position: 'relative',
        ...bounceSpring
      }}>
        <h2>{project.title}</h2>
        <img src={project.imageSrc} />
      </animated.div>
    </animated.li>
  );
}
