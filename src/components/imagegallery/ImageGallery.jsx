import React, {Component} from "react";

import ImageGalleryItem from "components/imagegalleryitem/ImageGalleryItem";
import css from '../styles.module.css';



export default class ImageGallery extends Component {
  
  render () {
  console.log('ImageGallery - props:', this.props);
  const { pictures } = this.props;
  return (
    <>
        <ul className={css.ImageGallery}>
          {pictures.map((picture) => (
            <ImageGalleryItem key={picture.id} src={picture.webformatURL} />
          ))}
        </ul>
    </>
  );
}
}
