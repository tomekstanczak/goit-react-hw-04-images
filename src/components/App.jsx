import React, {Component} from 'react';
import Searchbar from './searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './imagegallery/ImageGallery';
import Loader from './loader/Loader';
import Button from './button/Button';
import Modal from './modal/Modal';
import css from './styles.module.css';
import PropTypes from 'prop-types';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const keyAuth = "41134158-d3e94c46577e61eb60875764f";

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      query: '',
      pictures: [],
      error: '',
      isLoading: false,
      page: 1,
      selectedPicture: null,
      morePictures: false,
    }
  };

holdChange = (event) => {
  const queryValue = event.target.value;
  this.setState({query: queryValue});
};
getPictures = async (even) => {
  even.preventDefault();
  this.setState({isLoading: true});
  const {query, page} = this.state
try {
  const results = await axios.get(`?key=${keyAuth}&q=${query}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`) ;
const newPictures = results.data.hits.filter(newPicture => !this.state.pictures.some(existingPicture => existingPicture.id === newPicture.id ))
if(newPictures.length === 0){
  this.setState({morePictures: false})
}else {
  this.setState(prevState => ({pictures: [...prevState.pictures, ...newPictures]}));
  this.setState({morePictures: true});}
}catch(error){this.setState({error})}
finally{
  this.setState({ isLoading: false })
}
};

componentDidUpdate(prevProps, prevState) {
  if (prevState.query !== this.state.query) {
    this.setState({ pictures: [] });
  }
}

loadMore = (eve) => {
  this.setState(prevState => ({page: prevState.page + 1}),
  ()=>{this.getPictures(eve)})
}


openModal = (selectedPicture) => {
  this.setState({selectedPicture: selectedPicture})
}

closeModal = () => {
  this.setState({selectedPicture: null})
}

  render(){
    const {isLoading} = this.state;
  return (
    <div className={css.App}>
      <Searchbar onChange={this.holdChange} onSubmit={this.getPictures}/>
      {isLoading &&<Loader />}
      <ImageGallery pictures={this.state.pictures} openModal={this.openModal}/>
      {this.state.morePictures && <Button onClick={this.loadMore}/>}
      {this.state.selectedPicture && <Modal picture={this.state.selectedPicture} closeModal={this.closeModal}/>}

    </div>
  );
  }
};


App.propTypes = {
  query: PropTypes.string,
  pictures: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  page: PropTypes.number,
  selectedPicture: PropTypes.string,
  morePictures: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func,
}