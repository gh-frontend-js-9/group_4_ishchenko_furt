import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.scss'

export const Navigation = () => {
    const navBar = [{
        link: '/popular',
        title: 'Popular'
    }, {
        link: '/new',
        title: 'New'
    }, {
        link: '/readingList',
        title: 'Reading list'
    }, {
        link: '/topics',
        title: 'Topics'
    }, {
        link: '/subscribe',
        title: 'Subscribe'
    }];
    let renderNav = navBar.map((nav: any, n: number) => {
        return <span key={n} className="navigation-bar">
                    <NavLink key={n} to={nav.link} className="navigation-bar__link navigation-bar__link--hovered">
                        {nav.title}
                    </NavLink>
                </span>
    });

    return (
        <>{renderNav}</>
    )
};