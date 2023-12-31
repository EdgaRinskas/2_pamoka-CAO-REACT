import React from 'react';

const ImageGrid = () => {
  const imageTitles = [
    'fields1.jpg',
    'fields2.jpg',
    'fields3.jpg',
    'fields4.jpg',
    'fields5.jpg',
    'fields6.jpg',
  ];

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
    gap: '5px',                                         
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className="image-grid" style={containerStyle}>
      {imageTitles.map((title, index) => (
        <div key={title} className={`image-box image-${index + 1}`}>
          <img src={`/images/${title}`} alt={title} style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;