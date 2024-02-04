import React, {Component} from 'react';
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export default class Button extends Component {
    render(){
        
    const {onClick} = this.props;
    
        return(
        <button type="button" onClick={onClick} className={css.Button}>Load more</button>
        )}};

Button.propTypes = {
    onClick: PropTypes.func,
}