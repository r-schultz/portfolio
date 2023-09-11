import { type Project } from './projectCard';
import './projectInfo.scss';

export default function ProjectInfo({ project }: { project?: Project }) {
  
  return (
    <div>
      <header>
        {project?.title}
      </header>
      <div className={project ? 'project-info active' : 'project-info'}>
        {project?.description}
      </div>
    </div>
  );
}