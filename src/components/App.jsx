import React, {Component} from 'react';
import Searchbar from './searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './imagegallery/ImageGallery';

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
    }
  }
holdChange = (event) => {
  const queryValue = event.target.value;
  this.setState({query: queryValue});
}
getPictures = async (even) => {
  even.preventDefault();
  this.setState({isLoading: true});
  const queryValue = this.state.query;
try {
  const resaults = await axios.get(`?key=${keyAuth}&q=${queryValue}&image_type=photo&orientation=horizontal&per_page=12`) ;
this.setState({pictures: resaults.data.hits});
}catch(error){this.setState({error})}
finally{
  this.setState({ isLoading: false })
}
  
}


  render(){
  return (
    <div>
      <Searchbar onChange={this.holdChange} onSubmit={this.getPictures}/>
      <ImageGallery pictures={this.state.pictures}/>

    </div>
  );
  }
};
