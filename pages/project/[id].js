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

  const projects = () => {
    getSingleProject(id).then(setProjectDetails);
  };

  const addToProject = () => {
    // const payload = { projectId: id, userId: currentUser.id };
    addMemberToProject(id, currentUser.id);
  };

  const removeFromProject = (e) => {
    console.warn(e);
    deleteMemberFromProject(e.target.id);
  };

  useEffect(() => {
    getUserById(user.uid).then(setCurrentUser);
    projects();
  }, [projectDetails.users]);

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
          <Button type="button" onClick={removeFromProject}>Uncommit</Button>) : (
          <Button type="button" onClick={addToProject}>Commit</Button>)
        </div>
        {projectDetails.users?.map((pdUser) => (
          <MemberCard userObj={pdUser} />
        ))};
      </div>
    </div>
  );
}
