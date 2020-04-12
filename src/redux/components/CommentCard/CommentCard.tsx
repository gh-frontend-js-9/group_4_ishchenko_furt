import React from 'react'
import {Content} from "../Content/Content";

export const CommentCard = (props) => {

    return(
        <Content mdFontSize>
            {props.comment}
        </Content>
    )
}