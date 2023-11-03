/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { checkUser, signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { getUserById, getUserProjects } from '../api/userData';
import StaffProjectCard from '../components/cards/StaffProjectCard';
import RegisterForm from '../components/forms/RegisterForm';

function Home() {
  const [projects, setProjects] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const { user } = useAuth();

  const userProjects = () => {
    if (user[0]) {
      getUserProjects(user.uid).then(setProjects);
    }
  };
  const onUpdate = () => {
    checkUser(user.uid).then(setCurrentUser);
  };

  useEffect(() => {
    getUserById(user.uid).then(setCurrentUser);
    userProjects();
  }, [currentUser]);

  return (
    <> {currentUser.uid !== user.uid ? (<RegisterForm onUpdate={onUpdate} />) : (
      <>
        <div className="prof">
          <div className="profileLeft">
            <div className="homeWelcome profile">
              <h1>Hello {user.fbUser.displayName}! </h1>
            </div>
            <div className="homeImg profile">
              <img src={currentUser.profilePic} alt={[currentUser?.firstName, currentUser.lastName]} style={{ width: '300px' }} />
            </div>
          </div>
          <div className="profileRight">
            <div className="profileInfo profile">
              <h3>{currentUser?.firstName} {currentUser?.lastName}</h3>
              <p>{currentUser.email}</p>
              <p>{currentUser?.phoneNumber}</p>
              <h6>{currentUser.isStaff ? 'STAFF' : ''}</h6>
            </div>
            <div className="homeButtons profile">
              <Link href={`/user/${currentUser.id}}`} passHref>
                <Button className="homeUpdate" variant="info">Update Profile</Button>
              </Link>
              <Button variant="danger" type="button" size="lg" className="copy-btn homeSO" onClick={signOut}>
                Sign Out
              </Button>
            </div>
          </div>
        </div>
        <div className="homeProjects">
          {projects.length ? projects.map((project) => (
            <StaffProjectCard key={projects.id} projObj={project} onUpdate={userProjects} />)) : ('')}
        </div>
      </>
    )}
    </>
  );
}

export default Home;
