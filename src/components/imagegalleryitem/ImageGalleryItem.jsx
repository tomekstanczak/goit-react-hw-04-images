import React, {Component} from "react";
import css from '../styles.module.css';

export default class ImageGalleryItem extends Component {
render(){
    return(
        <>
        <li className={css.ImageGalleryItem}>
  <img src={this.props.src} alt="" key={this.props.key} className={css.ImageGalleryItemImage}/>
</li>
</>
    )
}
};