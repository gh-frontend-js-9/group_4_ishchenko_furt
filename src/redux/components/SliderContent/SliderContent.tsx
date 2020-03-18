import React from "react";

const SliderContent = (props: any) =>{

    return(
        <div style={{transform: `translateX(-${(props: any) => props.translate}px)`,
                    transition: `transform ease-out ${(props: any) => props.transition}s`,
                    width: `${(props: any) => props.width}px`,
                    height: '100%',
                    display:'flex'}}>

        </div>
    )

}

export default SliderContent