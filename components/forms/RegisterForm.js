/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import { createUser, updateUser } from '../../api/userData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  profilePic: '',
  isStaff: false,
};
function RegisterForm({ userObj, onUpdate }) {
  const router = useRouter();
  const { user } = useAuth();

  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (userObj.id) setFormData(userObj);
  }, [userObj]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userObj.id) {
      updateUser(formData).then(() => router.push('/'));
    } else {
      createUser({ ...formData, uid: user.uid }).then(() => onUpdate);
      onUpdate();
    }
  };

  return (
    <Form className="forms" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          name="firstName"
          value={formData.firstName}
          placeholder="Enter your First Name"
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          name="lastName"
          value={formData.lastName}
          placeholder="Enter your Last Name"
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="text"
          name="email"
          value={formData.email}
          placeholder="Enter your Email"
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          placeholder="Enter your Phone Number"
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Profile Pic</Form.Label>
        <Form.Control
          type="text"
          name="profilePic"
          value={formData.profilePic}
          placeholder="Enter your Profile Pic Url"
          onChange={({ target }) => setFormData((prev) => ({ ...prev, [target.name]: target.value }))}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="switch"
          label="Are you staff?"
          name="isStaff"
          checked={formData.isStaff}
          onChange={(e) => {
            setFormData((prevState) => ({
              ...prevState,
              isStaff: e.target.checked,
            }));
          }}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {userObj.id ? 'Update Profile' : 'Create Profile'}
      </Button>
    </Form>
  );
}

RegisterForm.propTypes = {
  userObj: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    phoneNumber: PropTypes.string,
    profilePic: PropTypes.string,
    isStaff: PropTypes.bool,
    id: PropTypes.number,
    uid: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.string),
  }),
  onUpdate: PropTypes.func.isRequired,
};
RegisterForm.defaultProps = {
  userObj: initialState,
};

export default RegisterForm;
