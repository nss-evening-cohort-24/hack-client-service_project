/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { getUserProjects } from '../api/userData';
import ProjectCard from '../components/cards/ProjectCard';

function Home() {
  const [projects, setProjects] = useState([]);
  const { user } = useAuth();

  const userProjects = () => {
    getUserProjects(user[0].id).then(setProjects);
  };

  useEffect(() => {
    userProjects();
  }, []);

  return (
    <>
      <h1>Hello {user.fbUser.displayName}! </h1>
      <img src={user[0].profilePic} alt={[user[0].firstName, user[0].lastName]} style={{ width: '300px' }} />
      <div>
        <h3>{user[0].firstName} {user[0].lastName}</h3>
        <p>{user[0].email}</p>
        <p>{user[0].phoneNumber}</p>
        <h6>{user[0].isStaff ? 'STAFF' : ''}</h6>
      </div>
      <Link href={`/user/${user[0].id}`} passHref>
        <Button variant="info">Update Profile</Button>
      </Link>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
      <div>
        {projects.map((project) => (
          <ProjectCard projObj={project} onUpdate={userProjects} />
        ))}
      </div>

    </>
  );
}

export default Home;
