import React from "react";
import './IconBox.scss'

export const IconBox: React.FC = (props:any) =>{
    const {children} = props
    return(
        <div className={'icon-box'}>
            {children}
        </div>
    )
}
