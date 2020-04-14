import React from "react";
import '../Content/Content.scss'
import './ListItem.scss'

export const ListItem: React.FC = (props: any) =>{
    const {children} = props

    return(
        <li className={'content--md-font-size li-item'}>
            {children}
        </li>
    )
}