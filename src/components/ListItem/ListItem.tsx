import React from "react";
import '../Content/Content.scss';
import './ListItem.scss'

export const ListItem: React.FC = (props: any) =>{
    const {children} = props;

    return(
        <li className={'li-item content--lg-20px-font-size'} dangerouslySetInnerHTML={{__html: children}}>

        </li>
    )
}