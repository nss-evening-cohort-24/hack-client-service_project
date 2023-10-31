import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function CategoryButton({ catObj }) {
  return (
    <Button variant="dark">{catObj.type}</Button>
  );
}

CategoryButton.propTypes = {
  catObj: PropTypes.shape({
    type: PropTypes.string,
  }).isRequired,
};
