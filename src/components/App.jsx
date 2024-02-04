import React, { Component } from 'react';
import Searchbar from './searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './imagegallery/ImageGallery';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyAuth = '41134158-d3e94c46577e61eb60875764f';

export default class App extends Component {
  constructor(props){
    super(props);
  this.state = {
    query:'',
    pictures: [],
    isLoading: false,
    error: '',
    currentPage: 1,
  }
}

holdChange = (event) => {
    const queryValue = event.target.value;
    this.setState({query: queryValue});
  }

shouldComponentUpdate(nextProps, nextState){
  const oldState = this.state;

  if (nextState.pictures[0]?.title === oldState.pictures[0]?.title && nextState.currentPage === oldState.currentPage){
    return false
  }
  return true
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query) {
    this.loadPictures();
  }
}

loadPictures = async (eve) => {
  eve.preventDefault();
  const searchingValue = this.state.query;
  this.setState({ isLoading: true, pictures: [] });
  try {
    const response = await axios.get(`?key=${keyAuth}&q=${searchingValue}`);
    this.setState({ pictures: response.data.hits, isLoading: false });
  } catch (error) {
    this.setState({ error, isLoading: false });
  }
};



render() {
  const { pictures, isLoading } = this.state;

  return (
    <div>
      <Searchbar onChange={this.holdChange} onSubmit={this.loadPictures} />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ImageGallery pictures={pictures} />
      )}
    </div>
  )
      }
    }
