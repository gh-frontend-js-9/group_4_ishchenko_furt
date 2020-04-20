import React from "react";
import {Content} from "../Content/Content";
import {Title} from "../Title/Title";
import {SubscribeForm} from "../SubscribeForm/SubscribeForm";
import './SubscribeBox.scss'

export const SubscribeBox: React.FC = () => {

    return (

        <div className='subscribe-box'>
            <Title mixin = 'subscribe-box__title' extraXlFontSize>
                Get free web design insights...
            </Title>
            <Content mixin = 'subscribe-box__content'>
                In your inbox, every other week. And unsubscribe in a click, if you want.
            </Content>
            <SubscribeForm/>
        </div>
    )
};