import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const addMemberToProject = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projectusers/${payload.projectId}/${payload.userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMemberFromProject = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projectusers/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export { addMemberToProject, deleteMemberFromProject };
