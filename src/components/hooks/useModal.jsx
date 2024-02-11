import { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function useModal(closeModal) {
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

  return {
    handleClose,
  };
}
useModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
