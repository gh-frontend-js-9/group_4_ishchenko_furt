import React from "react";

export const Post: React.FC = (props:any) => {
    const {children} = props
    return (
        <div>
            {children}
        </div>
    )
};