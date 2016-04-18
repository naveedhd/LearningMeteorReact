import React from 'react';

import {Ninja} from './Ninja/Ninja.jsx';

// define and export our NinjaList component
export const NinjaList = () => (
  <div className="row">
      {renderNinjas()}
  </div>
);

const renderNinjas = () => (
  <Ninja />
);
