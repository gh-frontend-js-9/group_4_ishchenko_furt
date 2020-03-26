import React, {Component} from "react";
import Slider from "react-slick";
import lists from "../../components/ListCard/lists";
import {CategoryBlogCard} from "../../components/CategoryBlogCard/CategoryBlogCard";
import {ListCard} from "../../components/ListCard/ListCard";
import {settings, title} from "./ReadingListSettings";

class ReadingListPage extends Component {
    render() {
        let renderReadingList = lists.map((list: any) => (
            <ListCard {...list}/>
        ));

        return (
            <div>
                <CategoryBlogCard {...title} />

                <Slider {...settings}>
                    {renderReadingList}
                </Slider>
            </div>
        )
    }
}

export default ReadingListPage