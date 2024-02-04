import React, {Component} from 'react';
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
    
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
      }


    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          const { closeModal } = this.props;
          closeModal();
        }
      };

    handleClose = () => {
        const { closeModal } = this.props;
        closeModal();
      };
    render(){
        const {picture} =this.props

        return(
        
      <div className={css.Overlay} onClick={this.handleClose}>
        <div className={css.Modal}>
          <img src={picture.largeImageURL} alt={picture.tags} />
        </div>
      </div>)
    }
}


Modal.propTypes = {
    picture: PropTypes.shape({
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
}).isRequired,
closeModal: PropTypes.func.isRequired,
}