import React from "react";
import {ListItem} from "../ListItem/ListItem";

export const List: React.FC = (props: any) =>{
    let renderListItem = props.list.map((item: any)=>(
        <ListItem>
            {item}
        </ListItem>
        ))


    return(
        <ul>
            {renderListItem}
        </ul>
    )
}

