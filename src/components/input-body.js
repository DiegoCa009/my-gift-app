import React, { useState } from 'react';


export default function InputBody({setImages}) {

  const [inputValue,setValue] = useState("");
  const setNameImage = (e)=>
  {
    e.preventDefault();
    if(inputValue.trim().length > 2)
    { 
      setImages(inputValue);
      setValue("");
    }
  }

  const changeValue = (e)=>
  {
    setValue(e.target.value);
  }

  return (
    <form onSubmit={setNameImage}>
      <input type="text" value={inputValue} onChange={changeValue} />
    </form>
  );
}
