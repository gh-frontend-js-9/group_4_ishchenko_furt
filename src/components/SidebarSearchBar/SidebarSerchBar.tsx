import React from 'react';
import {SidebarBox} from '../SidebarBox/SidebarBox';
import './SidebarSearchBar.scss'

export const SidebarSearchBar: React.FC = () => {

    return (
        <SidebarBox>
            <div className={'search-bar'}>
                <input className={'search-bar__input'} type="text" placeholder={'Type something...'}/>
                <i className={'fa fa-search search-bar__icon'}> </i>
            </div>
        </SidebarBox>
    )
}