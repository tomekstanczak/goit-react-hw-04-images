import React from 'react';
import ImageGalleryItem from '../imagegalleryitem/ImageGalleryItem';
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export default function ImageGallery(props) {
  const { pictures, openModal } = props;
  return (
    <>
      <ul className={css.ImageGallery}>
        {pictures.map(picture => (
          <ImageGalleryItem
            key={picture.id}
            picture={picture}
            openModal={openModal}
          />
        ))}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  picture: PropTypes.shape({
    id: PropTypes.number,
  }),
  openModal: PropTypes.func,
};
