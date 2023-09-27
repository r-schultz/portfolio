import React, { createRef, RefObject, useState } from 'react';
import type { Project, ProjectHandle } from './components/ProjectCard';
import { ProjectCard } from './components/ProjectCard';
import ProjectInfo from './components/ProjectInfo';
import About from './components/About';
import projects from './components/projects'
import './App.scss';

function App() {
  const [activeProject, setActiveProject] = useState<Project>();
  const [lastActiveProjectRef, setLastActiveProjectRef] = useState<RefObject<ProjectHandle>>();
  const [doneAnimating, setDoneAnimating] = useState<boolean>(false);

  function setNewActiveProject(project: Project, projectRef: RefObject<ProjectHandle>) {
    setActiveProject(project);
    if (lastActiveProjectRef) {
      lastActiveProjectRef.current?.reset();
    }
    setLastActiveProjectRef(projectRef);
  }

  const projectRefs = React.useRef([]);
  projectRefs.current = projects.map((_, i) => projectRefs.current[i] ?? createRef());

  const projectAnimations = new Array(projects.length).fill(false);

  return (
    <div className="app">
      <About />

      <div className={'main-content'}>
        <nav className={`project-list ${doneAnimating ? 'in-flow' : ''}`}>
          {projects.map((p, index) => {
            return <ProjectCard
              index={index}
              key={p.id}
              project={p}
              setActiveProject={(project: Project) => {
                setNewActiveProject(project, projectRefs.current[index]);
              }}
              onAnimationComplete={(project: Project) => {
                projectAnimations[projects.indexOf(project)] = true;
                if (projectAnimations.every((v) => v)) {
                  setDoneAnimating(true);
                }
              }}
              ref={projectRefs.current[index]}
            />
          })}
        </nav>
        <ProjectInfo project={activeProject} />
      </div>
    </div>
  );
}

export default App;
