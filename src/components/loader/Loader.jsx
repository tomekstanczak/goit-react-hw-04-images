import React,{Component} from 'react';
import { MutatingDots } from 'react-loader-spinner';
import css from '../styles.module.css';

export default class Loader extends Component {
    
    render()
    {
        return(
<div className={css.loaderStyle}>
<MutatingDots
    visible={true}
    height="100"
    width="100"
    color="#4fa94d"
    secondaryColor="#4fa94d"
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    />
</div>
        );

    }

}
