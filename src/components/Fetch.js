import React, { useEffect, useState } from 'react';

export default function Fetch (){
  const [images, setImageUrl] = useState('');

    async function getDogData () {
      try {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random');
        
        setImages(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() =>{
        getDogData();
    },[])
  

  return (
    <div>
      <img className="Dog" src={image} alt="dog" />
    </div>
  );
}



