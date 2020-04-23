import React from "react";
import Slider from "react-slick";
import {Slide} from "./Slide";
import './SidebarSlider.scss';
import {authorSettings} from "./SidebarSliderSettings";

export const SidebarSlider:React.FC = () =>{

    return(
        <Slider {...authorSettings}>
            <Slide/>
            <Slide/>
            <Slide/>
            <Slide/>
        </Slider>
    )
}