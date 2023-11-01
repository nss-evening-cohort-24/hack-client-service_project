/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { getUserById, getUserProjects } from '../api/userData';
import StaffProjectCard from '../components/cards/StaffProjectCard';

function Home() {
  const [projects, setProjects] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const { user } = useAuth();

  const userProjects = (id) => {
    getUserProjects(id).then(setProjects);
  };

  useEffect(() => {
    getUserById(user.uid).then(setCurrentUser);
    userProjects(user.uid);
  }, []);

  return (
    <>
      <h1>Hello {user.fbUser.displayName}! </h1>
      <img src={currentUser.profilePic} alt={[currentUser.firstName, currentUser.lastName]} style={{ width: '300px' }} />
      <div>
        <h3>{currentUser.firstName} {currentUser.lastName}</h3>
        <p>{currentUser.email}</p>
        <p>{currentUser.phoneNumber}</p>
        <h6>{currentUser.isStaff ? 'STAFF' : ''}</h6>
      </div>
      <Link href={`/user/${currentUser.id}}`} passHref>
        <Button variant="info">Update Profile</Button>
      </Link>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button>
      <div>
        {projects.map((project) => (
          <StaffProjectCard key={projects.id} projObj={project} onUpdate={userProjects} />
        ))}
      </div>

    </>
  );
}

export default Home;
