import React, { useState,useEffect } from 'react';
import {fetching} from '../helpers/fetching-images';
import { useFetchGifts } from '../hooks/useFetchGifts';

export default function ImageContent({images}) {

  const {data:imgs , loading } = useFetchGifts(images)
  
  return(
   <div >
        
        {loading && <p>Cargando...</p>}
          {
               imgs.map(img => <img key={img.id} src={img.url}></img>)
           
          }
   </div>   
  );


}