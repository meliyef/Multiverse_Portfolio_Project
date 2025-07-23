import React from 'react';
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Inventory App',
    frontImage: '/images/InventoryApp.png',
    backImage: '/images/InventoryApp.png',
    description: 'A full stack application for managing inventory.',
    link: 'https://github.com/MV-SWE-Fiserv-US/group-full-stack-inventory-project-debugsquad',

  },
  {
    title: 'Hackathon Project',
    frontImage: '/images/weatherApp.png',
    backImage: '/images/weatherApp.png',
    description: 'A Kotlin Weather application that provides real-time weather updates.',
    link: 'https://github.com/melissaYefsah/AndroidWeatherApp',
  },
  {
    title: 'Backend Module',
    frontImage: '/images/frontEndProject.png',
    backImage: '/images/frontEndProject.png',
    description: 'A full stack application for managing inventory.',
    link: 'https://github.com/meliyef/MV_Backend_project',
  },
  {
    title: 'Frontend Module',
    frontImage: '/images/backEndModule.png',
    backImage: '/images/backEndModule.png',
    description: 'A full stack application for managing inventory.',
    link: 'https://github.com/MAR-Clover/MV-FrontEnd',
  },
];

function Projects() {
  return (
    <div style={{
      background:'linear-gradient(to right, #2e2778, #2b2751, #7777b8)',minHeight: '100vh',
      width: '100%',
      padding: '4rem 1rem',
      boxSizing: 'border-box',}}>
      <h1
  style={{
    textAlign: 'center',
    color: '#fff',
    fontSize: '2.5rem',
    fontWeight: '700',
    letterSpacing: '2px',
    marginBottom: '2rem',
    textShadow: '2px 2px 6px rgba(0,0,0,0.4)',
  }}
>
Selected Projects
</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',padding: '12rem' }}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}
export default Projects;
