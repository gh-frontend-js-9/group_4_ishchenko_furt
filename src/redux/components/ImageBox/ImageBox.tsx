import React from "react";
import './ImageBox.scss'

export const ImageBox: React.FC = (props: any) => {
    const imageStyle = (props.imagePost ? 'featured-img--post-styles': 'featured-img')

    return <>
        <div  key={props._id}>
            <img className={`${imageStyle} featured-img--hovered`}  alt='nature' src= {(props.featuredImage)}/>
        </div>
    </>
};