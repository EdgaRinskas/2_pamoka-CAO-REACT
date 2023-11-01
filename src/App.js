import React from 'react';
import './App.css';

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

function InnerHeader() {
  return (
    <div className="inner-header">
      <h1>Title</h1>
      <p>Some text about</p>
      <p>Second line</p>
      <button>Button</button>
    </div>
  );
}

function InnerText() {
  return (
    <div className="inner-text">
      <h1>Portfolio</h1>
      <p>
        El coronel, a quien Gabriel llamaba Papalelo, describiéndolo como su «cordón umbilical con la historia y la realidad», fue también un excelente narrador y le enseñó, por ejemplo, a consultar frecuentemente el diccionario, lo llevaba al circo cada año y fue el primero en introducir a su nieto en el «milagro» del hielo, que se encontraba en la tienda de la United Fruit Company.11​Frecuentemente decía: «Tú no sabes lo que pesa un muerto», refiriéndose así a que no había mayor carga que la de haber matado a un hombre, lección que García Márquez más tarde incorporaría en sus novelas.
      </p>
    </div>
  );
}

function InnerImage() {
  return (
    <div className="inner-image">
      <SixImagesBox />
    </div>
  );
}

function SixImagesBox() {
  return (
    <div className="six-images-box">
      <img src="#" alt="Image 1" />
      <img src="#" alt="Image 2" />
      <img src="#" alt="Image 3" />
      <img src="#" alt="Image 4" />
      <img src="#" alt="Image 5" />
      <img src="#" alt="Image 6" />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <HeroOne title="Your Title" subtitle="Your Subtitle" color="#3f8ed0" />
      <div className="HeroBoxContainer">
        <InnerHeader />
        <InnerText />
        <InnerImage />
      </div>
    </div>
  );
}

export default App;
