import React from "react";
import {NavLink} from "react-router-dom";
import './Navigation.scss'

export const Navigation = (props) => {
    const linkNavClass = (props.hoverElem
        ? "navigation-bar__link navigation-bar__link--hovered"
        : 'navigation-bar__link');

    const navBar = [{
        link: '#',
        title: 'Popular'
    }, {
        link: '/new',
        title: 'New'
    }, {
        link: '#',
        title: 'Reading list'
    }, {
        link: '/author',
        title: 'Author'
    }, {
        link: '#',
        title: 'Home'
    }];
    let renderNav = navBar.map((nav: any, n: number) => {
        return <span key={n} className="navigation-bar">
                    <NavLink key={n} to={nav.link} className={linkNavClass}>
                        {nav.title}
                    </NavLink>
                </span>
    });

    return (
        <>{renderNav}</>
    )
};