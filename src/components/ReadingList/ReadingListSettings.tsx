import {Arrow} from "../Arrow/Arrow";
import React from "react";

export const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    variableWidth: true,
    nextArrow: <Arrow/>,
    responsive: [
        {
            breakpoint: 1480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 740,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                centerMode: true
            }
        },
        {
            breakpoint: 370,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        },
        /*{
            breakpoint: 460,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }*/
    ]
};
