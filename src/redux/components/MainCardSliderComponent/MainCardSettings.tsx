import React from "react";

export const settings = {
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
        <div
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-start'
            }}
        >
            {dots}
        </div>
    ),
    customPaging: (i: any) => (
        <div className={'slick-dots'}>
            {i + 1}
        </div>
    )

};