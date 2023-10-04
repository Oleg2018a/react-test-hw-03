import React from 'react'

const Header = ({ toggleModal }) => {
  return (
    <div>
      <h2>Header</h2>
      <button type='button' onClick={toggleModal}>Open</button>
    </div>
  );
};

export default Header