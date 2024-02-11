import React from 'react';
import css from '../styles.module.css';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { onClick } = props;

  return (
    <button type="button" onClick={onClick} className={css.Button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
};
