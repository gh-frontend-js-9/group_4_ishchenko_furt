import React from "react";
import './Logo.scss'

export const Logo = (props) => {
    const LogoClass = (props.headerElem ? 'logo--white-color' : "logo--black-color");

    return (
        <img className={LogoClass} alt='Bahram' src={require('../../../assets/images/bahram.png')}/>
    )
};