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
  const [button, setButton] = useState('');

  const projects = async () => {
    const array = await getSingleProject(id);
    setProjectDetails(array);
  };

  const buttonCheck = () => {
    const check = projectDetails.users?.find((obj) => obj.id === currentUser.id);
    if (check) {
      setButton('Uncommit');
    } else {
      setButton('Commit');
    }
  };

  const handleClick = () => {
    const check = projectDetails.users.find((obj) => obj.id === currentUser.id);
    if (check) {
      deleteMemberFromProject(id, user.uid);
      projects();
    } else {
      addMemberToProject(id, currentUser.id);
      projects();
    }
  };

  useEffect(() => {
    getUserById(user.uid).then(setCurrentUser).then(() => {
      projects();
      buttonCheck();
    });
  }, [projectDetails.users, button]);

  return (
    <div className="single">
      <div className="singleDiv">
        <div className="singleImg">
          <img className="pImg" src={projectDetails.image} alt={projectDetails.name} />
        </div>
        <div className="singleInfo">
          <h1>{projectDetails.name}</h1>
          <h3>Location: {projectDetails.location}</h3>
          <p>Date: {projectDetails.date}</p>
          <p>Duration: {projectDetails.duration} hour(s)</p>
          <h6>{projectDetails.description}</h6>
          <h3>{projectDetails.category}</h3>
        </div>
        <div>
          <div>
            <Button type="button" onClick={handleClick}>{button}</Button>
          </div>
        </div>
      </div>
      <div className="members">
        <h4>Project Members</h4>
        {projectDetails.users?.map((pdUser) => (
          <MemberCard userObj={pdUser} />
        ))}
      </div>
    </div>
  );
}
