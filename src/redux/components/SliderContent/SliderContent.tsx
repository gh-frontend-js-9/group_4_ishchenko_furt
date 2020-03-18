import React from "react";
import styled from "@emotion/styled";

const SliderContent = styled.div`
    transform: translateX(-${(props: any) => props.translate}px);
    transition: transform ease-out ${(props: any) => props.transition}s;
    height: 100%;
    width: ${(props: any) => props.width}px;
    display: flex;
`

export default SliderContent