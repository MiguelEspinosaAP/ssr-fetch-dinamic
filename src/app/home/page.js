'use client';
import React from 'react';
import ImageList from '../../../components/ImageList/ImageList';
import VideoModal from '../../../components/VideoModal/VideoModal';

const HomePage = ({ images }) => {
  
  const [videoUrl, setVideoUrl] = React.useState('');
  const [modalIsOpen, setModalIsOpen] = React.useState(false);

  const openModal = (url) => {
    setVideoUrl(url);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setVideoUrl('');
    setModalIsOpen(false);
  };

  return (
    <div>

      <ImageList setVideoUrl={openModal} images={images} />
      <VideoModal isOpen={modalIsOpen} onRequestClose={closeModal} videoUrl={videoUrl} />
    </div>
  );
};

export default HomePage;
