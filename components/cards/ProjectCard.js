import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ProjectCard({ projObj }) {
  return (
    <div>
      <Card style={{ width: '20rem' }}>
        <Card.Img variant="left" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>${projObj.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">${projObj.location}</Card.Subtitle>
          <Card.Subtitle className="mb-2 text-muted">${projObj.date}</Card.Subtitle>
          <Card.Text>
            ${projObj.categoryId}
          </Card.Text>
          <Card.Text>
            ${projObj.description}
          </Card.Text>
          <Button id="proj-details-btn">View Project Details</Button>
          <Button class="proj-btn">Edit</Button>
          <Button class="proj-btn">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

ProjectCard.propTypes = {
  projObj: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.string,
    date: PropTypes.string,
    categoryId: PropTypes.number,
    description: PropTypes.string,
  }),
}.isRequired;

export default ProjectCard;
