import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createProject, updateProject } from '../../api/projectData';

const initialState = {
  name: '',
  description: '',
  location: '',
  image: '',
  date: '',
  startTime: '',
  duration: '',
};

function ProjectForm({ projObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => (
      { ...prevState, [name]: value }
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (projObj.id) {
      updateProject(formInput).then(() => router.push(`/project/${projObj.id}`));
    } else {
      const payload = { ...formInput };

      createProject(payload).then(() => router.push('/projects'));
    }
  };
  return (
    <>
      <h3>Add a Service Project</h3>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Service Project Name</Form.Label>
            <Form.Control type="text" name="name" value={formInput.name} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control type="text" name="image" value={formInput.image} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" as="textarea" rows={3} name="description" value={formInput.description} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" name="location" value={formInput.location} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" name="date" value={formInput.date} onChange={handleChange} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Service Project Duration</Form.Label>
            <Form.Control type="text" name="duration" value={formInput.duration} onChange={handleChange} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example">
              <option>Select From Dropdown</option>
              <option value="1">Adult Education</option>
              <option value="2">Arts and Culture</option>
              <option value="3">Civic & Community</option>
              <option value="4">Disaster & Emergency Services</option>
              <option value="5">Food Insecurity</option>
              <option value="6">Housing & Homelessness</option>
              <option value="7">Imigrant & Refugee Services</option>
              <option value="8">Older Adult Services</option>
            </Form.Select>
          </Form.Group>
          <Button variant="primary" type="submit">
            {projObj.id ? 'Update' : 'Create'} Project
          </Button>
        </Form>
      </div>
    </>
  );
}

ProjectForm.propTypes = {
  projObj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    location: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    startTime: PropTypes.string,
    duration: PropTypes.string,
    id: PropTypes.number,
  }),
};

ProjectForm.defaultProps = {
  projObj: initialState,
};

export default ProjectForm;
