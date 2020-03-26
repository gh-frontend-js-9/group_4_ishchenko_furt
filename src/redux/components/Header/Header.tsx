import React from "react";
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {SearchIcon} from "../SearchIcon/SearchIcon";
import './Header.scss'


export const Header: React.FC = () => {

    return (
        <header className='header'>
            <div className='header__flex-box'>
                <Logo headerElem/>
                <Navigation hoverElem/>
            </div>

            <div>
                <SearchIcon/>
            </div>
        </header>
    );
};