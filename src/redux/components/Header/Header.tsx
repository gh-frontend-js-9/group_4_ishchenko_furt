import React from "react";
import {NavigationHeader} from "../NavigationHeader/NavigationHeader";
import {Logo} from "../Logo/Logo";
import {SearchIcon} from "../SearchIcon/SearchIcon";
import './Header.scss'

export const Header: React.FC = () => {

    return (
        <div className='wrapper'>
            <header className='header'>
                <div>
                    <Logo/>
                    <NavigationHeader/>
                </div>
                <div>
                    <SearchIcon/>
                </div>
            </header>


        </div>
    );
};