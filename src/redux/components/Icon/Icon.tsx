import React from "react";
import './Icon.scss'

export const Icon = () => {
    const icons = [{
        name: 'fa-vk',
        href: 'https://www.vk.com'
    }, {
        name: 'fa-pinterest',
        href: 'https://www.pinterest.de/'
    }, {
        name: 'fa-instagram',
        href: 'https://www.instagram.com/'
    }, {
        name: 'fa-twitter',
        href: 'https://twitter.com/'
    }, {
        name: 'fa-facebook',
        href: 'https://www.facebook.com/'
    }];

    let renderIcon = icons.map((icon: any, n: number) => {
        return <span key={n} className="icon">
                        <a key={n} href={icon.href}>
                            <i key={n}
                               className={`${icon.name} fa__footer fa fa--color fa--hovered `}
                               aria-hidden="true"> </i>
                        </a>
                 </span>
    });

    return (
        <>{renderIcon}</>
    )
};