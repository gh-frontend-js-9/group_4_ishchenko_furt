import React from "react";
import './Author.scss';

export const Author: React.FC = (props: any) => {
    const {children} = props;

    return (
        <div className={'author'}>
            <img alt='user' className={'author__image'} src={require('../../../assets/images/photo.png')}/>
            <div className={'author__name'}>
                Tomas Laurinavicius
            </div>
            <span className={'author__social'}>
                {children}
            </span>
        </div>
    )
}
