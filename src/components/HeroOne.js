import React from 'react';

function HeroOne(props) {
  const heroOneStyle = {
    width: '100%',
    height: '370px',
    backgroundColor: props.color || '#3f8ed0',
  };

  return (
    <div style={heroOneStyle}>
      <h1>{props.title || 'Praktika'}</h1>
      <p>Tekstas</p>
      <h2>{props.subtitle || 'Antras'}</h2>
    </div>
  );
}

export default HeroOne;
