/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'

const Arrow = ({ direction, handleClick }: any) => (
    <div
        onClick={handleClick}
        css={css`
      display: flex;
      position: absolute;
      top: 10%;
      ${direction === 'right' ? `right: 25px` : `left: 25px`};
      height: 500px;
      width: 200px;
      opacity: 0;
      justify-content: center;
      border-radius: 50%;
      cursor: pointer;
      align-items: center;
      img {
        transform: translateX(${direction === 'left' ? '-2' : '2'}px);
        &:focus {
          outline: 0;
        }
      }
    `}
    >

    </div>
)

export default Arrow