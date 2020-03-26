import React from "react";
import './SearchIcon.scss'

export const SearchIcon = (props) => {
    const searchIconClass = (props.burgerMenuElem
        ? 'search-icon--black-color fa fa-search fa-2x'
        : "fa fa-search fa--hovered fa-2x");

    return (
        <i className={searchIconClass} aria-hidden="true"> </i>
    )
};