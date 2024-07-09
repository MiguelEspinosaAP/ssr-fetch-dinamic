import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { apiUrl } from '../../utils/config';


const ImageList = ({ setVideoUrl }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(`${apiUrl}/1`);
        setImages(response.data);
      } catch (error) {
        alert(`Error: ${error}`);
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleClick = (videoUrl) => {
    setVideoUrl(videoUrl);
  };

  return (
    <div>
      {images.map((item, index) => (
        <img
          key={index}
          src={item.image}
          alt={`Image ${index + 1}`}
          onClick={() => handleClick(item.video)}
          style={{ cursor: 'pointer', margin: '10px' }}
        />
      ))}
    </div>
  );
};

export default ImageList;
