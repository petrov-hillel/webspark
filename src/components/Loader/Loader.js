import React from 'react';
import './Loader.scss';

export const Loader = ({ logoSrc }) => {
  return (
    <div className="loader-container">
      <img src={logoSrc} alt="Loading..." className="loader-logo" />
    </div>
  );
};