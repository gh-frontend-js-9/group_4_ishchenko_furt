import React from "react";
import './BreadCrumb.scss';


export const BreadCrumb: React.FC = (props: any) =>{
    const  {children} = props;

    return(
        <div className={'bread-crumb'}>
            {children}
        </div>
    )
};