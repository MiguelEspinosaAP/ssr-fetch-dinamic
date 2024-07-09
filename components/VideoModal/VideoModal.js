
import React from 'react';
import Modal from 'react-modal';


const VideoModal = ({ isOpen, onRequestClose, videoUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Video Modal">
      <button onClick={onRequestClose}>Cerrar</button>
      {videoUrl && (
        <video controls style={{ width: '100%' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </Modal>
  );
};

export default VideoModal;
