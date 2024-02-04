import css from '../styles.module.css';

import React, {Component} from 'react';

export default class Searchbar extends Component {
    render(){
        const {onChange, onSubmit} = this.props;
        return(
        
   <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={onSubmit}>
        <label className={css.SearchFormButtonLabel}> </label>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.buttonLabel}>Search</span>
      </button>
     
  
      <input
        className={css.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={onChange}
      />
    </form>
  </header>)}

}