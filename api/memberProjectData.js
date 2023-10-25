// once endpoints have been finalized, make sure passing the API calls the correct information

const addMemberToProject = (payload) => new Promise((resolve, reject) => {
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

const deleteMemberFromProject = () => new Promise((resolve, reject) => {
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

export { addMemberToProject, deleteMemberFromProject };
