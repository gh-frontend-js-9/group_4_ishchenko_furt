import React from 'react'
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";

export const CommentCard = (props) => {

    return (
        <>
            <div className='comment-card'>
                <img alt='user' src={require('../../../assets/images/photo.png')}/>
                <Title font = {'lgFontSize'}>
                    {props.name}
                </Title>
                <Content mdFontSize greyColor>
                    {props.date}
                </Content>
            </div>

            <Content mdFontSize>
                {props.comment}
            </Content>
        </>
    )
}