import React, { useState } from 'react';
import { type Project, ProjectCard } from './components/ProjectCard';
import ProjectInfo from './components/ProjectInfo';
import About from './components/About';
import projects from './config/projects'
import './App.scss';

function App() {
  const [activeProject, setActiveProject] = useState<Project>();
  function setActiveAndInactive(project: Project) {
    projects.forEach((p) => {
      p.active = p === project;
    });
    setActiveProject(project);
  }

  return (
    <div className="App">
      <About />

      <div className={'main-content'}>
        <nav className={'project-list'}>
          {projects.map((p, index) => {
            return <ProjectCard
              index={index}
              key={p.id}
              project={p}
              setActiveProject={setActiveAndInactive}
            />
          })}
        </nav>
        <ProjectInfo project={activeProject} />
      </div>
    </div>
  );
}

export default App;
