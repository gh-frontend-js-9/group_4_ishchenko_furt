import React from "react";
import './Author.scss'

export const Author: React.FC = (props: any) =>{
    return(
        <div className={'author'}>
            <img alt='user' src={require('../../../assets/images/photo.png')}/>
            <div className={'author__name'}>
                {props.author}
            </div>
            <span className={'author__social'}>
                Follow me
                <a href='' className={'author__link'}>
                    {props.media}
                </a>
            </span>
        </div>
    )
}