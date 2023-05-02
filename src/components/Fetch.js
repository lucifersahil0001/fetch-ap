import React, { useEffect, useState } from 'react';

function Fetch() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setImageUrl(data.message);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDogImage();
  }, []);

  return (
    <div>
      <img src={imageUrl} alt="Random dog" />
    </div>
  );
}

export default Fetch;
