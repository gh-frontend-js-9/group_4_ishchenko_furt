import React from "react";
import {NavLink} from "react-router-dom";
import './Icon.scss'

export const Icon = () => {
    const icons = [{
        name: 'fa-vk',
        link: '/vk'
    }, {
        name: 'fa-pinterest',
        link: '/printerest'
    }, {
        name: 'fa-instagram',
        link: '/instagram'
    }, {
        name: 'fa-twitter',
        link: 'twitter'
    }, {
        name: 'fa-facebook',
        link: 'facebook'
    }];

    let renderIcon = icons.map((icon: any, n: number) => {
        return <span key={n} className="icon">
                        <NavLink key={n} to={icon.link}>
                            <i key={n}
                               className={`${icon.name} fa__footer fa fa--color fa--hovered `}
                               aria-hidden="true"> </i>
                        </NavLink>
                 </span>
    });

    return (
        <>{renderIcon}</>
    )
};