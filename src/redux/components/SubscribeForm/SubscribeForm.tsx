import React from "react";
import {EmailInput} from "../EmailInput/EmailInput";
import {Button} from "../Button/Button";
import './SubscribeForm.scss'

export const SubscribeForm: React.FC = () => {

    return (
        <form className='subscribe-input'>
            <EmailInput mixin ='subscribe-input__email' placeholder = 'Your email'/>
            <Button mixin ='subscribe-input__button'>Subscribe</Button>
        </form>
    )
};