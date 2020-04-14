import React from "react";
import './FigCaption.scss'

export const FigCaption: React.FC = (props: any) => {
    const {children} = props

    return(
        <figcaption className={'figcaption'}>
            {children}
        </figcaption>
    )
}