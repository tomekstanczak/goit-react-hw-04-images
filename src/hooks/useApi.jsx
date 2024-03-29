import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyAuth = '41134158-d3e94c46577e61eb60875764f';

export default function useApi() {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedPictures, setSelectedPictures] = useState(null);
  const [morePictures, setMorePictures] = useState(false);

  const holdChange = event => {
    const queryValue = event.target.value;
    setQuery(queryValue);
  };

  const holdSubmit = ev => {
    ev.preventDefault();
    setPage(1);
    setPictures([]);
    if (page === 1) {
      getPictures();
    }
  };

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  const getPictures = async () => {
    setIsLoading(true);
    try {
      const results = await axios.get(
        `?key=${keyAuth}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`
      );
      const newPictures = results.data.hits.filter(
        newPicture =>
          !pictures.some(
            existingPicture => existingPicture.id === newPicture.id
          )
      );
      if (newPictures.length === 0) {
        setMorePictures(false);
      } else {
        setPictures(prevPictures => [...prevPictures, ...newPictures]);
        setMorePictures(true);
      }
    } catch (error) {
      console.error('error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      getPictures();
    }
  }, [page]);

  const openModal = selectedPicture => {
    setSelectedPictures(selectedPicture);
  };

  const closeModal = () => {
    setSelectedPictures(null);
  };

  return {
    pictures,
    isLoading,
    selectedPictures,
    morePictures,
    holdChange,
    holdSubmit,
    loadMore,
    openModal,
    closeModal,
  };
}
