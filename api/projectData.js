// once endpoints have been finalized, make sure passing the API calls the correct information

import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllProjects = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getSingleProject = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projects/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const createProject = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projects`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const updateProject = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projects/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteProject = (projectId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projects/${projectId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getProjectsByCategory = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projectsbycategory/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getCategoriesWithProjects = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/categories`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getAllProjects, getSingleProject, createProject, updateProject, deleteProject, getProjectsByCategory, getCategoriesWithProjects,
};
