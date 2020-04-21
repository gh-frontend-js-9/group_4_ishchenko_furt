import React from "react";
import {Author} from "../Author/Author";
import {Icon} from "../Icon/Icon";
import './User.scss'

export const User:React.FC = () =>{
    return(
        <div className={'user'}>
            <Author>
                Hi, my name is Daniel, I'm the CTO here at Kinsta.
            </Author>
            <div className={'user__icons'}>
                <Icon/>
            </div>
        </div>
    )
}
