import React from "react";
import './Post.scss'
import ImagePlace from "../ImagePlace/ImagePlace";
import {Like} from "../Like/Like";
import {Icon} from "../Icon/Icon";
import {IconBox} from "../IconBox/IconBox";


export const Post: React.FC = () => {
    return (
        <div className={'post'}>
            <IconBox>
                <Icon postElement/>
            </IconBox>
            <ImagePlace/>
            <Like/>
        </div>
    )
}