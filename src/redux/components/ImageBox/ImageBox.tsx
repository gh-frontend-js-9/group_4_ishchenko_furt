import React from "react";
import './ImageBox.scss'

export const ImageBox: React.FC = (props: any) => {

    return <div key={props._id}>
        <img className="featured-img featured-img--hovered" alt='nature' src={(props.featuredImage)}/>
    </div>
};