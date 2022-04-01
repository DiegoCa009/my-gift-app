const fetching = async (text)=>
{

  const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=AZFX4qqCryTKg3QIYm1kqUrO3s7mw5uy&q=${encodeURI(text)}&limit=8`);
  const {data} = await resp.json();
  
  const gifs = data.map(img => 
{
    return{
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }

})
  return gifs;

}

export {fetching};