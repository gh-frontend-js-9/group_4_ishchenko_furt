import React from "react";
//import {NavLink} from "react-router-dom";
import '../../../assets/styles/css/NavigationHeader.css'

export const NavigationHeader = () => {
    const navigationBar = [{
        link: '#',
        name: 'Popular'
    }, {
        link: '#',
        name: 'New'
    }, {
        link: '#',
        name: 'Reading list'
    }, {
        link: '#',
        name: 'Topics'
    }, {
        link: '#',
        name: 'Subscribe'
    }];
    let renderNav = navigationBar.map((nav: any, n: number) => {
        return <span key={n} className="navigation-bar__item">
                    <a key={n} href={nav.link} className="navigation-bar__link">
                        {nav.name}
                    </a>
                </span>
    });
    return (
        <>{renderNav}</>
    )
};