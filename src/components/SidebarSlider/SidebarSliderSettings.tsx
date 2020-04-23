import './SidebarSlider.scss';
import {Arrow} from "../Arrow/Arrow";
import React from "react";

export const authorSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: true,
    className:'author-slider',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    prevArrow:<br />,
    nextArrow: <Arrow/>
}