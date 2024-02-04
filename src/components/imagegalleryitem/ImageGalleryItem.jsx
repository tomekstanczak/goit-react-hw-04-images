import React, {Component} from "react";
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export default class ImageGalleryItem extends Component {
 handleClick = () => {
    const {picture, openModal} = this.props;
    openModal(picture);
 }


render(){
    const {webformatURL, id, tags} = this.props.picture
    return(
        <>
        <li className={css.ImageGalleryItem} onClick={this.handleClick}>
  <img src={webformatURL} alt={tags} key={id} className={css.ImageGalleryItemImage} />
</li>
</>
    )
}
};

ImageGalleryItem.propTypes = {
    picture: PropTypes.shape({
        webformatURL: PropTypes.string,
        tags: PropTypes.string,
        id: PropTypes.number,

    })
}