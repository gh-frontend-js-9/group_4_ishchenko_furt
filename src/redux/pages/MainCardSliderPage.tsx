import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getPostsActions} from "../actions/getPostsActions";
import './MainCardSliderPage.scss'
import {MainCard} from "../components/MainCard/MainCard";

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class MainCardSliderPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        let renderMainCard = this.props.listPosts.map((post: any) =>
            <div className='main-card-page' key={post._id}>
                <MainCard  {...post}/>
            </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderMainCard}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        listPosts: state.postsReducers.listPosts,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getPostsActions()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardSliderPage);