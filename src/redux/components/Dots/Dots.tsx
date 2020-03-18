/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Dot = ({ active }: any) => (
    <span
        css={css`
      padding: 10px;
      margin-right: 5px;
      border-radius: 50%;
      background: ${active ? 'black' : 'white'};
    `}
    />
)

const Dots = ({ slides, activeIndex }: any) => (
    <div
        css={css`
      position: absolute;
      bottom: 25px;
      left: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
    `}
    >
        {slides.map((slide:any, i:any) => (
            <Dot key={i} active={activeIndex === i} />
        ))}
    </div>
)

export default Dots