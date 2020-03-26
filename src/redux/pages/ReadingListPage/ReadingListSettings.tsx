import {Arrow} from "../../components/Arrow/Arrow";
import React from "react";

export const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <Arrow/>,
    responsive: [
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 820,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 1,
            }
        },
        {
            breakpoint: 620,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 410,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }
    ]
};

export const title: object = {
    category: 'Reading List'
};