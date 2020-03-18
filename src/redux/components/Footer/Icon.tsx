import React from "react";
// import {NavLink} from "react-router-dom";

export const Icon = () => {
    const icons = [{
        name: 'fa-vk',
        href: '/vk'
    }, {
        name: 'fa-pinterest',
        href: '/printerest'
    }, {
        name: 'fa-instagram',
        href: '/instagram'
    }, {
        name: 'twitter',
        href: 'fa-twitter'
    }, {
        name: 'facebook',
        href: 'fa-facebook-square'
    }];

    let renderIcon = icons.map((icon: any, n: number) => {
        return <span key={n} className="sidebar__item">
                        <a key={n} href={icon.href}>
                            <i key={n}
                               className={`${icon.name} fa fa--color fa--hovered fa-2x`}
                               aria-hidden="true"> </i>
                        </a>
                 </span>
    });

    return (
        <>{renderIcon}</>
    )
};