/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import RegisterForm from '../../components/forms/RegisterForm';
import { useAuth } from '../../utils/context/authContext';
import { getUserById } from '../../api/userData';

export default function UpdateUser() {
  const { user } = useAuth();
  const [userObj, setUserObj] = useState({});

  useEffect(() => {
    getUserById(user[0].uid).then(setUserObj);
  }, []);

  return (
    <div>
      <RegisterForm userObj={userObj} />;
    </div>
  );
}
