import React from 'react';
import { MutatingDots } from 'react-loader-spinner';
import css from '../styles.module.css';

export default function Loader() {
  return (
    <div className={css.loaderStyle}>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#3397da"
        secondaryColor="#3f51b5"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
