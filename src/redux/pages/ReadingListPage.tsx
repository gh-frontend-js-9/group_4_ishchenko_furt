import React, {Component }from "react";
import Slider from "react-slick";
import {CategoryBlogCard} from "../components/CategoryBlogCard/CategoryBlogCard";

class ReadingListPage extends Component<any, any>{
    render(){

        const title: object = {
            category: 'Reading List'
        }

        return (
            <div>
                <CategoryBlogCard {...title} />


            </div>
        )
    }
}


export default ReadingListPage