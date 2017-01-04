import React from 'react';
import classNames from 'classnames';

import '../styles/Child.css';

const ChildComponent = (props) => {
  const errClass = classNames({
    'hello': true,
    'error': props.isError
  });

  return (
    <div>
      <p className={errClass}>Hello!</p>
    </div>
  );
};

export default ChildComponent;