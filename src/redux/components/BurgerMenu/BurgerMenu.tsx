import React from 'react';
import {Navigation} from "../Navigation/Navigation";
import {StyledBurgerMenu, StyledMenu} from "./StyledBurgerMenu";
import {Logo} from "../Logo/Logo";
import {SearchIcon} from "../SearchIcon/SearchIcon";

const Menu = ({open, setOpen}) => {
    return (
        <StyledMenu open={open}>
            <Logo headerElem/>
            <Navigation/>
            <SearchIcon burgerMenuElem/>
        </StyledMenu>
    );
};

const Burger = ({open, setOpen}) => {
    return (
        <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
            <div> </div>
            <div> </div>
            <div> </div>
        </StyledBurgerMenu>
    )
};

export const BurgerMenu = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Burger open={open} setOpen={setOpen}/>
            <Menu open={open} setOpen={setOpen}/>
        </>
    )
};