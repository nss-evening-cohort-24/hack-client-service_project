import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ProjectForm from '../../../components/forms/ProjectForm';
import { getSingleProject } from '../../../api/projectData';

export default function EditProject() {
  const [editProjectInfo, setProjectInfo] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleProject(id).then(setProjectInfo);
  }, [id]);

  return (
    <ProjectForm projObj={editProjectInfo} />
  );
}
