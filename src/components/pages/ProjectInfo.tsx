import { type Project } from './projects';
import './ProjectInfo.scss';
import LeftArrow from '../icons/LeftArrow';

export default function ProjectInfo({ project }: { project?: Project }) {
  if (project) {
    return (
      <div className="project-info active">
        <header>
          <h2>{project.title}</h2>
          <p className='company-info'>
            <span>{project.company.name}</span> | <span>{project.company.industry}</span>
          </p>
        </header>
        {project.description()}
      </div>
    );
  } else {
    return (
      <div className="project-info">
        <span className="no-selection"><LeftArrow />Choose a project to start</span>
      </div>
    );
  }
}