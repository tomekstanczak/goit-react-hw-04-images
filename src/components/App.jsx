import React, {Component} from 'react';
import Searchbar from './searchbar/Searchbar';
import axios from 'axios';
import ImageGallery from './imagegallery/ImageGallery';
import Loader from './loader/Loader';
import Button from './button/Button';


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

  this.setState(prevState => ({pictures: [...prevState.pictures, ...newPictures]}));
}catch(error){this.setState({error})}
finally{
  this.setState({ isLoading: false })
}
};

loadMore = (eve) => {
this.setState(prevState => ({page: prevState.page + 1}),
()=>{this.getPictures(eve)})
}


  render(){
    const {isLoading} = this.state;
  return (
    <div>
      <Searchbar onChange={this.holdChange} onSubmit={this.getPictures}/>
      {isLoading &&<Loader />}
      <ImageGallery pictures={this.state.pictures}/>
      <Button onClick={this.loadMore}/>

    </div>
  );
  }
};
