/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projectData';
import ProjectCard from '../components/cards/ProjectCard';

export default function ViewAllProjects() {
  const [proj, setProj] = useState([]);

  const getProjectsToView = () => {
    getAllProjects().then(setProj);
  };

  useEffect(() => {
    getProjectsToView();
  }, []);

  return (
    <>
      <div
        id="projects-page"
        style={{ padding: '30px' }}
      >
        {proj.map((projects) => (
          <ProjectCard key={projects.id} projObj={projects} onUpdate={getProjectsToView} />
        ))}
      </div>
    </>
  );
}
