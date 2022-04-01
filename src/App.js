import React, { useState } from 'react';
import InputBody from './components/input-body.js';
import ImageContent from './components/images-content.js';
export default function App() {
  const [images,setImages] = useState("Hola");
  
  return (
    <>
      <h3>MyGiftApp</h3>
      <InputBody setImages={setImages}/>
      <hr />
      <ImageContent images={images}/>


    </>
  );
}
