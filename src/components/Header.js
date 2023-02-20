import React from 'react';

const Header = () => (
  <header>
    <h1>todos</h1>
    <p className="warn">Inserting empty todo is not allowed. Please add item</p>
    <p className="success">Items will persist in the browser local storage</p>

  </header>
);
export default Header;
