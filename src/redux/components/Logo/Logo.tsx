import React from "react";
import './Logo.scss'

export const Logo = (props) => {
    const LogoClass = (props.headerElem ? 'logo--black-color' : "logo--gray-color");

    return (
        <img className={LogoClass} alt='Bahram' src={require('../../../assets/images/bahram.png')}/>
    )
};