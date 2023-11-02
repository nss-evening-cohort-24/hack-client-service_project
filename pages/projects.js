/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getAllProjects, getCategoriesWithProjects, getProjectsByCategory } from '../api/projectData';
import StaffProjectCard from '../components/cards/StaffProjectCard';
import UserProjectCard from '../components/cards/UserProjectCard';
import { getUserById } from '../api/userData';
import { useAuth } from '../utils/context/authContext';
import CategoryButton from '../components/CategoryButton';

export default function Projects() {
  const { user } = useAuth();
  const [proj, setProj] = useState([]);
  const [member, setMember] = useState({});

  const [cats, setCats] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isCategoryFiltered, setIsCategoryFiltered] = useState(false);

  const getCatButtons = () => {
    getCategoriesWithProjects().then(setCats);
  };

  const filteredProjects = (id) => {
    getProjectsByCategory(id).then(setFiltered);
    setIsCategoryFiltered(true);
  };

  const viewAllProjects = () => {
    setIsCategoryFiltered(false);
  };


  useEffect(() => {
    getAllProjects().then((data) => setProj(data));
    getUserById(user[0].uid).then((data) => setMember(data));
  }, []);

  return (
    <>
      <div>
        <CategoryButton key="viewAll" catObj={{ id: 'all', type: 'View All Projects' }} filteredProjects={viewAllProjects} />
        {cats.map((category) => (
          <CategoryButton key={category.id} catObj={category} filteredProjects={filteredProjects} />
        ))}
      </div>
      <div>

        {member?.isStaff === true ? (
          <div className="projects-page" style={{ padding: '30px' }}>
            {isCategoryFiltered
              ? filtered.map((projects) => (
                <StaffProjectCard key={projects.id} projObj={projects} />
              ))
              : proj.map((projects) => (
                <StaffProjectCard key={projects.id} projObj={projects} />
              ))}
          </div>
        ) : (
          <div className="projects-page" style={{ padding: '30px' }}>
            {proj.map((projects) => (
              <UserProjectCard key={projects.id} projObj={projects} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
