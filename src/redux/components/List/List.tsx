import React from "react";
import {ListItem} from "../ListItem/ListItem";
import './List.scss'

export const List: React.FC = (props: any) =>{
    let renderListItem = props.list.map((item: any)=>(
        <ListItem>
            {item}
        </ListItem>
        ))


    return(
        <ul className={'list'}>
            {renderListItem}
        </ul>
    )
}

