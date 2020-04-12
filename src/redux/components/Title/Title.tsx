import React from "react";
import './Title.scss'

export const Title: React.FC = (props: any) => {
    const {children} = props;

    return <h3 className='title'>
        {props.category}
        {children}
    </h3>
};