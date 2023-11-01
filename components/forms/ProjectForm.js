import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { createProject, getCategoriesWithProjects, updateProject } from '../../api/projectData';

const initialState = {
  name: '',
  description: '',
  location: '',
  image: '',
  date: '',
  duration: 0,
  categoryId: 0,
};

function ProjectForm({ projObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCategoriesWithProjects().then(setCategories);

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
      updateProject(formInput).then(() => router.push('/projects'));
    } else {
      const payload = { ...formInput };

      createProject(payload).then(() => router.push('/projects'));
    }
  };

  return (
    <>
      <h3>{projObj.id ? 'Update' : 'Create'} a Service Project</h3>
      <div>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Service Project Name</Form.Label>
            <Form.Control type="text" name="name" value={formInput.name} onChange={handleChange} />
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
            <Form.Select
              aria-label="Category"
              name="categoryId"
              onChange={handleChange}
              className="mb-3"
              value={formInput.categoryId}
              required
            >
              <option value="">Select a Category</option>
              {
            categories.map((category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.type}
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
    duration: PropTypes.number,
    id: PropTypes.number,
    categoryId: PropTypes.number,
  }),
};

ProjectForm.defaultProps = {
  projObj: initialState,
};

export default ProjectForm;
