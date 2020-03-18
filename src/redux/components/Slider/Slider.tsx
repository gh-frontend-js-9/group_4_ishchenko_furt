/** @jsx jsx */
import React, {useState} from 'react'
import { css, jsx } from '@emotion/core'
import { MainCard } from '../MainCard/MainCard'
import SliderContent from "../SliderContent/SliderContent";
import Arrow from "../Arrow/Arrow";
import Dots from "../Dots/Dots";

const Slider = (props: any) => {
    const getWidth = () => window.innerWidth

    const [state, setState] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
    })

    const {translate, transition, activeIndex} = state

    const nextSlide = () => {
        if (activeIndex === props.length - 1) {
            return setState({
                ...state,
                translate: 0,
                activeIndex: 0
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex + 1,
            translate: (activeIndex + 1) * getWidth()
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setState({
                ...state,
                translate: (props.length - 1) * getWidth(),
                activeIndex: props.length - 1
            })
        }

        setState({
            ...state,
            activeIndex: activeIndex - 1,
            translate: (activeIndex - 1) * getWidth()
        })
    }

    return (
        <div css={SliderCSS}>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth()* props.length}
            >
                {props.map((slide: any, i: any) => (
                    <MainCard key={i} {...slide} />
                ))}
            </SliderContent>

            <Arrow direction="left" handleClick={prevSlide} />
            <Arrow direction="right" handleClick={nextSlide} />

            <Dots slides={props} activeIndex={activeIndex} />
        </div>
    )
}

const SliderCSS = css`
  position: relative;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  overflow: hidden;
`
export default Slider