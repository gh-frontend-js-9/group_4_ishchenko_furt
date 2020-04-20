import React from 'react';
import './AuthorSidebar.scss'
import {SubscribeSmallBox} from '../SubscribeSmallBox/SubscribeSmallBox';

export const AuthorSidebar: React.FC = () => {

    return (
        <div className='author-sidebar'>
            <SubscribeSmallBox/>
        </div>
    )
};