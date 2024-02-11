import css from '../styles.module.css';
import PropTypes from 'prop-types';
import useModal from 'components/hooks/useModal';

export default function Modal({ picture, closeModal }) {
  const { handleClose } = useModal(closeModal);

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
