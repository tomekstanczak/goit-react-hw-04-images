import css from '../styles.module.css';

const ImageGalleryItem = ({ src }) => {
  return (
    <>
      <li className={css.ImageGalleryItem}>
        <img src={src} alt="" />
      </li>
    </>
  );
};

export default ImageGalleryItem;

