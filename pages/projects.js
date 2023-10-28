/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllProjects } from '../api/projectData';
import StaffProjectCard from '../components/cards/StaffProjectCard';

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
        className="projects-page"
        style={{ padding: '30px' }}
      >
        {proj.map((projects) => (
          <StaffProjectCard key={projects.id} projObj={projects} onUpdate={getProjectsToView} />
        ))}
      </div>
    </>
  );
}
