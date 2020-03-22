import React from "react";
import './ListCard.scss'

export const ListCard: React.FC = (props:any) => {
    return(
        <div className={'list-container'}>
            <div className={'list-card'}/>
            <h3 className={'list-title'}>{props.listTitle}</h3>
        </div>
    )
}