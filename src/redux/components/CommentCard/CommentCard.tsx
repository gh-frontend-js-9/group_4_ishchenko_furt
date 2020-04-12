import React from 'react'
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";

export const CommentCard = (props) => {

    return (
        <>
            <Title >
                {props.name}
            </Title>
            <Content mdFontSize greyColor>
                {props.date}
            </Content>

            <Content mdFontSize>
                {props.comment}
            </Content>
        </>
    )
}