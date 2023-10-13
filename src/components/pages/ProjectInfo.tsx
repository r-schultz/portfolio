import { type Project } from './projects';
import './ProjectInfo.scss';

export default function ProjectInfo({ project }: { project?: Project }) {
  return (
    <div className={project ? 'project-info active' : 'project-info'}>
      <header>
        <h2>{project?.title}</h2>
      </header>
      {project?.description}
    </div>
  );
}