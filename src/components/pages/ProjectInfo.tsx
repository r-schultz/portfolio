import { animated, easings, useSpring } from '@react-spring/web';
import { type Project } from './projects';
import './ProjectInfo.scss';
import LeftArrow from '../icons/LeftArrow';

export default function ProjectInfo({ project }: { project?: Project }) {
  const [arrowSpring, arrowAPI] = useSpring(() => ({
    from: {
      x: 0
    },
    to: {
      x: -10,
    },
    config: {
      duration: 500,
      easing: easings.easeInOutSine,
    },
    onRest(result) {
      const xVal = result.value.x;
      arrowAPI.start({ x: xVal ===  -10 ? 0 : -10});
    }
  }));

  if (project) {
    return (
      <div className="project-info active">
        <header>
          <h2>{project.title}</h2>
          <p className="company-info">
            <span>{project.company.name}</span> | <span>{project.company.industry}</span>
          </p>
        </header>
        {project.description()}
      </div>
    );
  } else {
    return (
      <div className="project-info">
        <span className="no-selection">
          <animated.span style={{...arrowSpring}}><LeftArrow /></animated.span>
          Choose a project to start
        </span>
      </div>
    );
  }
}