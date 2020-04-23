import React from "react";
import './BreadCrumb.scss';

export const BreadCrumb: React.FC = (props: any) =>{
    const  {children} = props;
    const mixin = props.mixin;

    return(
        <div className={`bread-crumb ${mixin}`}>
            {children}
        </div>
    )
};