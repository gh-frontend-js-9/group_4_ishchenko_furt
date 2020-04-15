import React from 'react'
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";
import {OutlineButton} from "../OutlineButton/OutlineButton";
import './CommentCard.scss'
import moment from "moment";

export const CommentCard = (props) => {
    let date = moment(props.created_at).format('LLL');

    return (
        <>
            <div className='comment-card'>
                <img className='avatar' alt='user' src={(props.avatar)}/>

                <div className='comment-card__box'>

                    <div className='comment-card__first-container'>
                        <Title font={'lgFontSize'}>
                            {props.name}
                        </Title>
                        <Content mdFontSize greyColor>
                            {date}
                        </Content>
                        <OutlineButton>
                            Reply
                        </OutlineButton>
                    </div>

                    <div className='comment-card__second-container'>
                        <Content mdFontSize>
                            {props.comment}
                        </Content>
                    </div>
                </div>


            </div>
            <img className='line-image' alt='line' src={require('../../../assets/images/line.png')}/>
        </>
    )
}