import React from "react";
import './../Icon/Icon.scss';
import './Media.scss'

export const Icon: React.FC = (props:any) =>{
    return(
        <div className={'media-container'}>
            <i
               className={`${props.name} fa media-icon fa--hovered`}
               aria-hidden="true"
            >
            </i>
        </div>
    )
}
