import React from "react";
import './Post.scss'
import {Media} from "../Media/Media";
import {ImagePlace} from "../ImagePlace/ImagePlace";
import {Like} from "../Like/Like";


export const Post: React.FC = () =>{
    return(
        <div className={'post'}>
            <Media />
            <ImagePlace/>
            <Like />
        </div>
    )
}