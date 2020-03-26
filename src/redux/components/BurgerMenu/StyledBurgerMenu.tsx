import styled from "styled-components";

type IProps = {
    open?: any;
    setOpen?: any
}

export const StyledBurgerMenu = styled.button <IProps>`
  position: absolute;
  top: 3%;
  left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  
  @media (min-width:805px) {
       display:none;
     }
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({open}) => open ? '#0D0C1D' : 'white'};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({open}) => open ? '0' : '1'};
      transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const StyledMenu = styled.nav <IProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
  transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
  height: 100vh;
  text-align: left;
  padding: 25px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
      width: 100%;
    }
  @media (min-width:805px) {
      display:none;
     }

  a {
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;
