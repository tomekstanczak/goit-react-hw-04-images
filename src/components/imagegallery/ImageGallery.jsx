import React, {Component} from "react";
import ImageGalleryItem from '../imagegalleryitem/ImageGalleryItem';
import css from '../styles.module.css';

export default class ImageGallery extends Component {
    render(){
        const { pictures } = this.props;
        return(
            <>
            <ul className={css.ImageGallery}>
                {pictures.map(picture => (
                    <ImageGalleryItem key={picture.id} src={picture.webformatURL}/>
                ))}

            </ul>
            </>
        )
    }
}