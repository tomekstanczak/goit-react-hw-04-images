import React from 'react';
import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem(props, handleClick) {
  handleClick = () => {
    const { picture, openModal } = props;
    openModal(picture);
  };

  const { webformatURL, id, tags } = props.picture;
  return (
    <li className={css.ImageGalleryItem} onClick={handleClick}>
      <img
        src={webformatURL}
        alt={tags}
        key={id}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  picture: PropTypes.shape({
    webformatURL: PropTypes.string,
    tags: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
};
