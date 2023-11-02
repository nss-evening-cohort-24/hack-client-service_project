import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const addMemberToProject = (projectId, userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projectusers/${projectId}/${userId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(payload),
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteMemberFromProject = (projectId, userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/projectusers/${projectId}/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export { addMemberToProject, deleteMemberFromProject };
