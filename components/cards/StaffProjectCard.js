/* eslint-disable no-unused-vars */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { deleteProject, getAllProjects } from '../../api/projectData';

function StaffProjectCard({ projObj, onUpdate }) {
  const deleteThisProject = () => {
    if (window.confirm(`Delete ${projObj.name}?`)) {
      deleteProject(projObj.id).then(onUpdate);
    }
  };

  return (
    <div className="staffCard">
      <Card className="card" style={{ width: '20rem' }}>
        <Card.Img variant="top" src={projObj.image} alt={projObj.name} />
        <Card.Body>
          <Card.Title className="cardTitle">{projObj.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{projObj.location}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">{projObj.date}</Card.Subtitle>
          <Card.Text>
            {projObj.category ? projObj.category.type : 'Category Not Available'}
          </Card.Text>
          <Card.Text>
            <div className="cardDesc">
              {projObj.description}
            </div>
          </Card.Text>
          <div className="cardBtns">
            <Button className="proj proj-details-btn" href={`/project/${projObj.id}`} passhref>Details</Button>
            <Button className="proj proj-btn" href={`/project/edit/${projObj.id}`} passhref>Edit</Button>
            <Button className="proj proj-btn" onClick={deleteThisProject} onUpdate={getAllProjects}>Delete</Button>
          </div>
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
  onUpdate: PropTypes.func.isRequired,
}.isRequired;

export default StaffProjectCard;
