import React from 'react';
import './AuthorTheme.scss'
import Pagination from '../Pagination/Pagination';
import {SubscribeBox} from '../SubscribeBox/SubscribeBox';
import {User} from '../User/User';

export const AuthorTheme: React.FC = () => {

    return (
        <div className='author-theme'>
            <User/>
            <Pagination/>
            <SubscribeBox/>
        </div>
    )
};