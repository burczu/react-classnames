import React from 'react';
import Child from './Child';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <Child />
      </div>
    );
  }
}

export default AppComponent;
