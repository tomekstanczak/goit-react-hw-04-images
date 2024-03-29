import React from 'react';
import Searchbar from './searchbar/Searchbar';
import ImageGallery from './imagegallery/ImageGallery';
import Loader from './loader/Loader';
import Button from './button/Button';
import Modal from './modal/Modal';
import css from './styles.module.css';
import useApi from '../hooks/useApi';

export default function App() {
  const {
    pictures,
    isLoading,
    selectedPictures,
    morePictures,
    holdSubmit,
    holdChange,
    loadMore,
    openModal,
    closeModal,
  } = useApi();

  return (
    <div className={css.App}>
      <Searchbar onSubmit={holdSubmit} onChange={holdChange} />
      {isLoading && <Loader />}
      <ImageGallery pictures={pictures} openModal={openModal} />
      {morePictures && <Button onClick={loadMore} />}
      {selectedPictures && (
        <Modal picture={selectedPictures} closeModal={closeModal} />
      )}
    </div>
  );
}
