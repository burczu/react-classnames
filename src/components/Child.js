import React from 'react';

import '../styles/Child.css';

const ChildComponent = (props) => {
  const errClass = props.isError ? 'error' : '';

  return (
    <div>
      <p className={errClass}>Hello!</p>
    </div>
  );
};

export default ChildComponent;