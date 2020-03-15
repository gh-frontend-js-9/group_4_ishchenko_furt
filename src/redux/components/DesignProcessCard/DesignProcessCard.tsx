import React from "react";
import './DesignProcessCard.scss'

export const DesignProcessCard: React.FC = () => {
    const items = [{
        header: 'Popular',
        autor: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
        title: 'How to Boost Conversions on Your WooCommerce Product Pages',
        paragraph: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    }, {
        header: 'Essentials',
        autor: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
        title: 'How to Boost Conversions on Your WooCommerce Product Pages',
        paragraph: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    }, {
        header: 'Freelance',
        autor: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
        title: 'How to Boost Conversions on Your WooCommerce Product Pages',
        paragraph: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
    }]
    let renderItems = items.map((item: any, n: number) => {
        return <>
            <h3 className='article-header'>
                {item.header}
            </h3>
            <div key={n} className="design-process-card design-process-card--hovered">
                <p className="design-process-card__author"> {item.autor}</p>
                <h3 className="design-process-card__title">{item.title}</h3>
                <p className="design-process-card__paragraph">{item.paragraph}</p>
            </div>
        </>
    });

    return (
        <div>
            <>{renderItems}</>
        </div>

    );
};