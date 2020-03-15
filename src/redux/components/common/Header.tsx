import React from "react";
import {NavigationHeader} from "./NavigationHeader";
import {Logo} from "./Logo";
import {SearchIcon} from "./SearchIcon";

export const Header: React.FC = () => {

    return (
        <header className='header'>
            <Logo/>
            <NavigationHeader/>
            <SearchIcon/>
        </header>
    );
};