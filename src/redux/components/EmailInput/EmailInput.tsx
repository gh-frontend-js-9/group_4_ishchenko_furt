import React from "react"
import './EmailInput.scss'

export const EmailInput = (props: any) => {
    return (
        <input {...props}
               required
               className="entry-field"
               placeholder="Email"/>
    )
};