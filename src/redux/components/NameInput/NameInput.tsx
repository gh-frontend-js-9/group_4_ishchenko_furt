import React from "react"

export const NameInput = (props: any) => {

    return (
        <input {...props}
               required
               className="entry-field"
               placeholder="Name"/>
    )
};