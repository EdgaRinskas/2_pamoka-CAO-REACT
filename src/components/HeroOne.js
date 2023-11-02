import React from 'react';

function HeroOne(props) {
  const heroOneStyle = {
    width: '100%',
    height: '370px',
    backgroundColor: props.color || '#3f8ed0',
  };

  return (
    <div style={heroOneStyle}>
      <h1>{props.title || 'Info hero'}</h1>
      <h1>{props.subtitle || 'Info subtitle'}</h1>
    </div>
  );
}

export default HeroOne;
