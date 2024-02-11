import React, { useEffect } from 'react';
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export default function Modal({ picture, closeModal }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  const handleClose = () => {
    closeModal();
  };

  return (
    <div className={css.Overlay} onClick={handleClose}>
      <div className={css.Modal}>
        <img src={picture.largeImageURL} alt={picture.tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  picture: PropTypes.shape({
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};
