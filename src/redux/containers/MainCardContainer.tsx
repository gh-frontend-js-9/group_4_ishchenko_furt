import React, {Component} from 'react'
import {MainCard} from "../components/MainCard/MainCard";
import Loading from "../components/Healpers/Loading";

const data = [{
    id: '1',
    header: 'Popular',
    author: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
    title: 'How to Boost Conversions on Your WooCommerce Product Pages',
    paragraph: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
}, {
    id: '2',
    header: 'Essentials',
    author: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
    title: 'How to Boost Conversions on Your WooCommerce Product Pages',
    paragraph: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
}, {
    id: '3',
    header: 'Freelance',
    author: 'BY TOMAS LAURINAVICIUS IN DESIGN PROCESS',
    title: 'How to Boost Conversions on Your WooCommerce Product Pages',
    paragraph: 'User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.'
}];

interface IProps {
    isLoading?: boolean,
}

export default class MainCardContainer extends Component <IProps, {}> {

    render() {
        let getMainCard = data.map((items: any) =>
            <MainCard {...items} key={items.id}/>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {getMainCard} </>}
            </>
        )
    }
}

