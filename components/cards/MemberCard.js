import React from 'react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

function MemberCard({ userObj }) {
  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={userObj.profilePic} alt={[userObj.firstName, userObj.lastName]} />
        <Card.Body>
          <Card.Title>{userObj.firstName} {userObj.lastName}</Card.Title>
          <Card.Text>
            <p>{userObj.email}</p>
            <p>{userObj.phoneNumber}</p>
            <p>{userObj.isStaff ? 'Staff Member' : ''}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

MemberCard.propTypes = {
  userObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    isStaff: PropTypes.bool,
    uid: PropTypes.string,
    profilePic: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape),
  }).isRequired,
};

export default MemberCard;
