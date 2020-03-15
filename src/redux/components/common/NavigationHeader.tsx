import React from "react";
//import {NavLink} from "react-router-dom";
import '../../../assets/styles/css/NavigationHeader.css'

export const NavigationHeader = () => {
    const navigationBar = [{
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
    let renderNav = navigationBar.map((nav: any, n: number) => {
        return <span key={n} className="navigation-bar__item">
                    <a key={n} href={nav.link} className="navigation-bar__link">
                        {nav.title}
                    </a>
                </span>
    });
    return (
        <>{renderNav}</>
    )
};