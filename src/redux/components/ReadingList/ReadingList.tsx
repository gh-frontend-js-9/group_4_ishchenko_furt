import React from "react";
import Slider from "react-slick";
import lists from "../ListCard/lists";
import {Title} from "../Title/Title";
import {ListCard} from "../ListCard/ListCard";
import {settings} from "./ReadingListSettings";
import './ReadingList.scss'

export const ReadingList: React.FC = () => {

    let renderReadingList = lists.map((list: any) => (
        <ListCard {...list}/>
    ));

    return (
        <>
            <Title mixin="reading-list__title" xxxlFontSize>
                Reading List
            </Title>

            <Slider {...settings}>
                {renderReadingList}
            </Slider>
        </>
    )
}


