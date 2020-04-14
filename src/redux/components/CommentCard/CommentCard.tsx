import React from 'react'
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";
import {OutlineButton} from "../OutlineButton/OutlineButton";
import './CommentCard.scss'

export const CommentCard = (props) => {

    return (
        <div className='comment-card'>
            <div className='comment-card__first-block'>
                <img className='avatar' alt='user' src={(props.avatar)}/>
                <Title font={'lgFontSize'}>
                    {props.name}
                </Title>
                <Content mdFontSize greyColor>
                    {props.created_at}
                </Content>
                <OutlineButton>
                    Reply
                </OutlineButton>
            </div>

            <Content mdFontSize>
                {props.comment}
            </Content>

            <img className='line-image' alt='line' src={require('../../../assets/images/line.png')}/>
        </div>
    )
}