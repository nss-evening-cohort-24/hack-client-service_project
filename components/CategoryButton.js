import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export default function CategoryButton({ catObj, filteredProjects }) {
  return (
    <Button className="catBtn" variant="dark" onClick={() => filteredProjects(catObj.id)}>
      {catObj.type}
    </Button>
  );
}

CategoryButton.propTypes = {
  catObj: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
  }).isRequired,
  filteredProjects: PropTypes.func.isRequired,
};
