import React from "react";

export const FigCaption: React.FC = (props: any) => {
    const {children} = props

    return(
        <figcaption>
            {children}
        </figcaption>
    )
}