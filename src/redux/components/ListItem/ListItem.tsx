import React from "react";
import '../Content/Content.scss'

export const ListItem: React.FC = (props: any) =>{
    const {children} = props

    return(
        <li>
            {children}
        </li>
    )
}