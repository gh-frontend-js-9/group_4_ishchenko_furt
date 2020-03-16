import React from "react";
//import {NavLink} from "react-router-dom";
import './NavigationHeader.scss'

export const NavigationHeader = () => {
    const navBar = [{
        link: '#',
        title: 'Popular'
    }, {
        link: '#',
        title: 'New'
    }, {
        link: '#',
        title: 'Reading list'
    }, {
        link: '#',
        title: 'Topics'
    }, {
        link: '#',
        title: 'Subscribe'
    }];
    let renderNav = navBar.map((nav: any, n: number) => {
        return <span key={n} className="navigation-bar">
                    <a key={n} href={nav.link} className="navigation-bar__link navigation-bar__link--hovered">
                        {nav.title}
                    </a>
                </span>
    });

    return (
        <>{renderNav}</>
    )
};