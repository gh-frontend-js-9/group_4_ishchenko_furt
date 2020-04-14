import React from "react";
import {Title} from "../Title/Title";
import {Content} from "../Content/Content";

export const Author: React.FC = (props: any) =>{
    return(
        <div>
            <img alt='user' src={require('../../../assets/images/photo.png')}/>
            <Content>
                {props.author}
            </Content>
            <span>
                Follow me
                <span>
                    {props.media}
                </span>
            </span>
        </div>
    )
}