import React from "react";
import Slider from "react-slick";
import {Slide} from "./Slide";
import './AuthorSlider.scss';
import {authorSettings} from "./AuthorSliderSettings";

export const AuthorSlider:React.FC = () =>{

    return(
        <Slider {...authorSettings}>
            <Slide/>
            <Slide/>
            <Slide/>
            <Slide/>
        </Slider>
    )
}