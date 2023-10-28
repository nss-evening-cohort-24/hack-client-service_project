import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { deleteProject } from '../../api/projectData';

function StaffProjectCard({ projObj, onUpdate }) {
  const deleteThisProject = () => {
    if (window.confirm(`Delete ${projObj.name}?`)) {
      deleteProject(projObj.id).then(() => onUpdate());
    }
  };

  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
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
          <Button class="proj-details-btn" href={`/project/${projObj.id}`} passHref>View Project Details</Button>
          <Button class="proj-btn" href={`/project/edit/${projObj.id}`} passHref>Edit</Button>
          <Button class="proj-btn" onClick={deleteThisProject}>Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

StaffProjectCard.propTypes = {
  projObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    id: PropTypes.number,
  }),
}.isRequired;

export default StaffProjectCard;
