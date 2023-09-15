import { type Project } from './ProjectCard';
import './ProjectInfo.scss';

export default function ProjectInfo({ project }: { project?: Project }) {
  return (
    <div className={project ? 'project-info active' : 'project-info'}>
      <header>
        {project?.title}
      </header>
      {project?.description}
    </div>
  );
}