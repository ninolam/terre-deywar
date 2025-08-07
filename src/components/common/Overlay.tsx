import React from 'react';

const Overlay = ({ className }: { className?: string }) => {
  return <div className={`Overlay ${className ? `Overlay--${className}` : ''}`} />;
};

export default Overlay;