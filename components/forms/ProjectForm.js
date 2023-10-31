import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createProject, getAllProjects, updateProject } from '../../api/projectData';

const initialState = {
  name: '',
  description: '',
  location: '',
  image: '',
  date: '',
  startTime: '',
  duration: '',
  categoryId: '',
};

function ProjectForm({ projObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getAllProjects().then(setCategories);

    if (projObj.id) setFormInput(projObj);
  }, [projObj]);

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
            <Form.Select
              aria-label="Category"
              name="categoryId"
              onChange={handleChange}
              className="mb-3"
              value={projObj.categoryId}
              required
            >
              <option value="">Select a Category</option>
              {
            categories.map((category) => (
              <option
                key={category.categoryId}
                value={category.firebaseKey}
              >
                {category.category.type}
              </option>
            ))
          }
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
    categoryId: PropTypes.number,
  }),
};

ProjectForm.defaultProps = {
  projObj: initialState,
};

export default ProjectForm;
