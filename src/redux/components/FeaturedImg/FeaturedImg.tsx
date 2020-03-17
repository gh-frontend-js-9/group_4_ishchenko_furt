import React from "react";
import './FeaturedImg.scss'

export const FeaturedImg: React.FC = (props: any) => {
    return <>
        <div  key={props._id}>
            <img className="featured-img"  alt='nature' src= {(props.featuredImage)}/>
            {/*<p className="featured-post-card__author">BY TOMAS LAURINAVICIUS IN DESIGN PROCESS</p>*/}
            {/*<h3 className="featured-post-card__title">{props.title}</h3>*/}
            {/*<p className="featured-post-card__description">{props.description}</p>*/}
        </div>
    </>
};