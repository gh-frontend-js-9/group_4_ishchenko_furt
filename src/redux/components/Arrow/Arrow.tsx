import React from "react";

export const Arrow = (props: any) => {
    const {style, onClick} = props;
    return (
        <div className="slick-arrow"
             style={{
                 ...style,
                 display: 'block',
                 position: 'absolute',
                 top: '40%',
                 right: '30px',
                 cursor: "pointer"
             }}
             onClick={onClick} >

            <img src={require('../../../assets/images/right-arrow.png')} alt="arrow_right"/>
        </div>
    );
};