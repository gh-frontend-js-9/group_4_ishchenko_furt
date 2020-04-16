import React, {Component} from "react";
import Slider from "react-slick";
import lists from "../ListCard/lists";
import {Title} from "../Title/Title";
import {ListCard} from "../ListCard/ListCard";
import {settings, title} from "./ReadingListSettings";

class ReadingList extends Component {

    render() {
        let renderReadingList = lists.map((list: any) => (
            <ListCard {...list}/>
        ));

        return (
            <div>
                <Title xxlFontSize {...title} />

                <Slider {...settings}>
                    {renderReadingList}
                </Slider>
            </div>
        )
    }
}

export default ReadingList;