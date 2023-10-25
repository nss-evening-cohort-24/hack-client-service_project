const getUserById = () => new Promise((resolve, reject) => {
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

const createUser = (payload) => new Promise((resolve, reject) => {
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

const updateUser = (payload) => new Promise((resolve, reject) => {
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

const getUserProjects = () => new Promise((resolve, reject) => {
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
  getUserById, createUser, updateUser, getUserProjects,
};
