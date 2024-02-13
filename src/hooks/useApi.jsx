import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyAuth = '41134158-d3e94c46577e61eb60875764f';

export default function useApi() {
  const [query, setQuery] = useState('');
  const [pictures, setPictures] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedPictures, setSelectedPictures] = useState(null);
  const [morePictures, setMorePictures] = useState(false);

  const holdChange = event => {
    const queryValue = event.target.value;
    setQuery(queryValue);
  };

  const loadMore = eve => {
    const newPage = page + 1;
    console.log('Before loadMore - Current page:', page);
    setPage(newPage);
    console.log('After setPage - Current page:', page);
    getPictures(eve, newPage);
  };

  const getPictures = async (even, page) => {
    even.preventDefault();
    console.log('Current page:', page);
    if (page === undefined) {
      page = 1;
    }
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
      setError('error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setPictures([]);
    setPage(1);
  }, [query]);

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
    getPictures,
    loadMore,
    openModal,
    closeModal,
  };
}
