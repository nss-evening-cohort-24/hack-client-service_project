/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
import { deleteProject, getAllProjects } from '../../api/projectData';
// import { useAuth } from '../../utils/context/authContext';
// import { addMemberToProject } from '../../api/memberProjectData';

function StaffProjectCard({ projObj }) {
  // const user = useAuth();
  // const router = useRouter();

  const deleteThisProject = () => {
    if (window.confirm(`Delete ${projObj.name}?`)) {
      deleteProject(projObj.id).then(getAllProjects);
    }
  };

  // const signUpForProject = () => {
  //   const payload = () => {
  //     const usersId = user[0].id;
  //     const projectsId = projObj.id;
  //   };
  //   addMemberToProject(payload).then(() => router.push('/'));
  // };

  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src={projObj.image} alt={projObj.name} />
        <Card.Body>
          <Card.Title>{projObj.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{projObj.location}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{projObj.date}</Card.Subtitle>
          <Card.Text>
            {projObj.category.type}
          </Card.Text>
          <Card.Text>
            {projObj.description}
          </Card.Text>
          <Button className="proj-details-btn" href={`/project/${projObj.id}`} passhref>Details</Button>
          <Button className="proj-btn" href={`/project/edit/${projObj.id}`} passhref>Edit</Button>
          <Button className="proj-btn" onClick={deleteThisProject} onUpdate={getAllProjects}>Delete</Button>
          <Button className="proj-btn">Sign Up</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

StaffProjectCard.propTypes = {
  projObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired;

export default StaffProjectCard;
