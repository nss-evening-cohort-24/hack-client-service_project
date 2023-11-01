/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import MemberCard from '../../components/cards/MemberCard';
import { getSingleProject } from '../../api/projectData';
import { addMemberToProject, deleteMemberFromProject } from '../../api/memberProjectData';
import { useAuth } from '../../utils/context/authContext';
import { getUserById } from '../../api/userData';

export default function ViewSingleProject() {
  const [projectDetails, setProjectDetails] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const { user } = useAuth();

  const project = () => {
    getSingleProject(id).then(setProjectDetails);
  };

  const addToProject = (projectId, userId) => {
    const payload = { projectId, userId };
    addMemberToProject(payload).then(project());
  };

  const removeFromProject = (projectId) => {
    deleteMemberFromProject(projectId).then(project());
  };

  useEffect(() => {
    getUserById(user.uid).then(setCurrentUser);
    project();
  });

  return (
    <div>
      <img src={projectDetails.image} alt={projectDetails.name} />
      <h1>{projectDetails.name}</h1>
      <h3>{projectDetails.location}</h3>
      <p>{projectDetails.date}</p>
      <p>{projectDetails.duration}</p>
      <h6>{projectDetails.description}</h6>
      <h3>{projectDetails.category}</h3>
      <div>
        <div>
          {currentUser.projects?.id === projectDetails.id ? (
            <Button onClick={() => removeFromProject(projectDetails.id)}>Uncommit</Button>) : (
              <Button onClick={() => addToProject(projectDetails.id, user[0].id)}>Commit</Button>)}
        </div>
        {projectDetails.users?.map((pdUser) => (
          <MemberCard userObj={pdUser} />
        ))};
      </div>
    </div>
  );
}
