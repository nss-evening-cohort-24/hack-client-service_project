const getAllProjects = () => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleProject = () => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const createProject = (payload) => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const updateProject = (payload) => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteProject = () => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getProjectByCategory = () => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getProjectByMembers = () => new Promise((resolve, reject) => {
  fetch('{endpointTBD, put it in ``}', {
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
  getAllProjects, getSingleProject, createProject, updateProject, deleteProject, getProjectByCategory, getProjectByMembers,
};
