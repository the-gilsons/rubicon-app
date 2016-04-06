import React from 'react';

export default App extends React.Component
{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
};
