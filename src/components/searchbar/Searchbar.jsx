import css from './Saarchbar.module.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onChange, onSubmit }) {
  return (
    <header className={css.Searchbar}>
      <form className={css.SearchForm} onSubmit={onSubmit}>
        <label className={css.SearchFormButtonLabel}>
          Search
          <button type="submit" className={css.SearchFormButton}>
            <span className={css.buttonLabel}>Search</span>
          </button>
        </label>

        <input
          className={css.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};
