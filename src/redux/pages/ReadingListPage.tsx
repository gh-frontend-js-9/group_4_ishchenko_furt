import React, {Component }from "react";
import Slider from "react-slick";
import lists from "../components/ListCard/lists";
import {CategoryBlogCard} from "../components/CategoryBlogCard/CategoryBlogCard";
import {ListCard} from "../components/ListCard/ListCard";
import {Arrow} from "../components/Arrow/Arrow";


class ReadingListPage extends Component<any, any>{
    render(){

        const title: object = {
            category: 'Reading List'
        }


        const settings = {
            dots: false,
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 4,
            initialSlide: 0,
            nextArrow: <Arrow />,
            responsive: [
                {
                    breakpoint: 1360,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        initialSlide: 1,
                    }
                },
                {
                    breakpoint: 620,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 410,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true
                    }
                }
            ]
        };

        let renderReadingList = lists.map((list:any)=>(
            <ListCard {...list}/>
        ))



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