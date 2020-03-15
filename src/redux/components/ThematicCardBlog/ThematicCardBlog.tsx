import React from "react";
import './ThematicCardBlogit add .g.scss'

export const ThematicCardBlog: React.FC = () => {
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
        return <>
            <div key={n} className="thematic-card-blog thematic-card-blog--hovered">
                <p className="thematic-card-blog__theme"> {item.theme}</p>
                <h3 className="thematic-card-blog__title">{item.title}</h3>
            </div>
        </>
    });

    return (
        <div>
            <>{renderItems}</>
        </div>

    );
};