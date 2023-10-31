/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MemberCard from '../../components/cards/MemberCard';
import { getSingleProject } from '../../api/projectData';

export default function ViewSingleProject() {
  const [projectDetails, setProjectDetails] = useState({});
  const router = useRouter();
  const { id } = router.query;

  const project = () => {
    getSingleProject(id).then(setProjectDetails);
  };

  useEffect(() => {
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
        {projectDetails.users?.map((user) => (
          <MemberCard userObj={user} />
        ))};
      </div>
    </div>
  );
}
