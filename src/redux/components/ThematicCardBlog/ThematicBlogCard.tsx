import React from "react";
import './ThematicBlogCard.scss'

export const ThematicBlogCard: React.FC = () => {
    const items = [{
        theme: 'FREELANCING',
        title: '7 Best WordPress Caching Plugins for 2018',
    },{
        theme: 'FREELANCING',
        title: '7 Best WordPress Caching Plugins for 2018',
    },{
        theme: 'FREELANCING',
        title: '7 Best WordPress Caching Plugins for 2018',
    },{
        theme: 'FREELANCING',
        title: '7 Best WordPress Caching Plugins for 2018',
    },]
    let renderItems = items.map((item: any, n: number) => {
        return <div key={n} className="thematic-blog-card thematic-blog-card--hovered">
            <p className="thematic-blog-card__theme"> {item.theme}</p>
                <h3 className="thematic-blog-card__title">{item.title}</h3>
            </div>

    });

    return (
        <div>
            <>{renderItems}</>
        </div>

    );
};