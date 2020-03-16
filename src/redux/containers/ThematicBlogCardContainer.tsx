import React, {Component} from 'react'
import Loading from "../components/Healpers/Loading";
import {ThematicBlogCard} from "../components/ThematicBlogCard/ThematicBlogCard";

const data = [{
    id: '1',
    theme: 'FREELANCING',
    title: '7 Best WordPress Caching Plugins for 2018',
}, {
    id: '2',
    theme: 'FREELANCING',
    title: '7 Best WordPress Caching Plugins for 2018',
}, {
    id: '3',
    theme: 'FREELANCING',
    title: '7 Best WordPress Caching Plugins for 2018',
}, {
    id: '4',
    theme: 'FREELANCING',
    title: '7 Best WordPress Caching Plugins for 2018',
}];

interface IProps {
    isLoading?: boolean,
}

export default class ThematicBlogCardContainer extends Component <IProps, {}> {

    render() {
        let getThematicBlog = data.map((items: any) =>
            <ThematicBlogCard {...items} key={items.id}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {getThematicBlog} </>}
            </>
        )
    }
}

