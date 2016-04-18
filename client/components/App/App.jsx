import React from 'react';

// define and export our App component
export const App = ({nav, content}) => (
  <div className="container-fluid main-container">
    <div className="col-xs-3">
      {nav}
    </div>
    <div className="col-xs-9">
      {content}
    </div>
  </div>
);
