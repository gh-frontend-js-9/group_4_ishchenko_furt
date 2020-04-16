import React from "react";
import './Like.scss';
import './../Icon/Icon.scss';


export const Like: React.FC = () => {
    const icons = [{
        name: 'fa-heart',
        quantity: '12K'
    }, {
        name: 'fa-eye',
        quantity: '25K'
    }]

    let renderIcons = icons.map((icon: any, n: number) => {
        return (
            <div key={n} className={'like-card'}>
                <i key={n}
                   className={`fa ${icon.name} like-icon fa--hovered`}
                   aria-hidden="true">
                </i>
                <div>
                    {icon.quantity}
                </div>
            </div>
        )
    });

    return (
        <div className={'like-container'}>
            {renderIcons}
        </div>
    )
}