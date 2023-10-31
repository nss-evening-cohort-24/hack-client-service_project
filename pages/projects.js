/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { getAllProjects, getProjectsByCategory } from '../api/projectData';
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

  const getCatButtons = () => {
    getProjectsByCategory(cats.id).then(setCats);
  };

  useEffect(() => {
    getAllProjects().then((data) => setProj(data));
    getUserById(user[0].uid).then((data) => setMember(data));
    getCatButtons();
  }, []);

  return (
    <>
      <div>
        {cats.map((category) => (
          <CategoryButton key={category.id} catObj={category} onClick={getCatButtons} />
        ))}
      </div>
      <div>
        {member?.isStaff === true ? (
          <div
            className="projects-page"
            style={{ padding: '30px' }}
          >
            {proj.map((projects) => (
              <StaffProjectCard key={projects.id} projObj={projects} />
            ))};
          </div>
        ) : (
          <div
            className="projects-page"
            style={{ padding: '30px' }}
          >
            {proj.map((projects) => (
              <UserProjectCard key={projects.id} projObj={projects} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
