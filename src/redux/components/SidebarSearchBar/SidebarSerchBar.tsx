import React from "react";
import {SidebarBox} from "../SidebarBox/SidebarBox";
import './SidebarSearchBar.scss'

export const SidebarSearchBar: React.FC = () => {
    return(
        <SidebarBox>
            <div className={'searchbar'}>
                <input className={'searchbar__input'} type="text" placeholder={'Type something...'}/>
                <i className={'fa fa-search searchbar__icon'}>

                </i>
            </div>
        </SidebarBox>
    )
}