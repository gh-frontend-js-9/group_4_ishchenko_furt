import React from "react";
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {SearchIcon} from "../SearchIcon/SearchIcon";
import './Header.scss'


export const Header: React.FC = () => {

    return (
        <header className='header'>
            <div>
                <Logo/>
                <Navigation/>
            </div>
            <div>
                <SearchIcon/>
            </div>
        </header>
    );
};