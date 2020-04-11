import React from "react";
import {Icon} from './MediaIcons'

export const Media: React.FC = () =>{
    const icons =
        [{
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
        }]

    let renderMediaIcons = icons.map((icon: any) =>(
        <Icon {...icon}/>
    ))

    return(
        <div>
            {renderMediaIcons}
        </div>
    )
}