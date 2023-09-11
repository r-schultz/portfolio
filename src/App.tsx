import React, { useState } from 'react';
import { type Project, ProjectCard } from './components/projectCard';
import ProjectInfo from './components/projectInfo';
import './App.scss';
import salesTrends from './assets/sales-trends.png';

const projects: Project[] = [{
  id: 1,
  title: 'Project 1',
  description: 'Project 1 description',
  imageSrc: salesTrends,
  imageAlt: ''
}, {
  id: 2,
  title: 'Project 2',
  description: 'Project 2 description',
  imageSrc: salesTrends,
  imageAlt: ''
},{
  id: 3,
  title: 'Project 3',
  description: 'Some project details and lots of text and stuff here thanx for reading',
  imageSrc: salesTrends,
  imageAlt: ''
},{
  id: 4,
  title: 'Project 4',
  description: 'Some project details and lots of text and stuff here thanx for reading',
  imageSrc: salesTrends,
  imageAlt: ''
},{
  id: 5,
  title: 'Project 5',
  description: 'Some project details and lots of text and stuff here thanx for reading',
  imageSrc: salesTrends,
  imageAlt: ''
},{
  id: 6,
  title: 'Project 6',
  description: 'Some project details and lots of text and stuff here thanx for reading',
  imageSrc: salesTrends,
  imageAlt: ''
}];

function App() {

  const [activeProject, setActiveProject] = useState<Project>();

  return (
    <div className="App">
      <ProjectInfo project={activeProject} />

      <nav className={'project-list'}>
        {projects.map((p, index) =>
          <ProjectCard
            index={index}
            key={p.id}
            project={p}
            setActiveProject={setActiveProject}
          />
        )}
      </nav>

    </div>
  );
}

export default App;
