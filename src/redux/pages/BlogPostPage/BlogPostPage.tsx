import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {getEssentialsPostAction, getFreelancePostAction, getPopularPostAction} from "../../actions/getPostsActions";
import {BoxCard} from "../../components/BoxCard/BoxCard";

interface IProps {
    getPopularPostAction?: any,
    getEssentialsPostAction?: any,
    getFreelancePostAction?: any,
    essentialsPost?: any,
    freelancePost?: any,
    isLoading?: boolean,
    popularPost?: any,
}

class BlogPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getPopularPostAction();
        this.props.getEssentialsPostAction();
        this.props.getFreelancePostAction()
    };

    render() {
        let propsData = [
            this.props.popularPost,
            this.props.essentialsPost,
            this.props.freelancePost
        ];

        let renderCategoriesPosts = propsData.map((data: any) => {
            return data.map((post: any) =>
                <BoxCard {...post} key={post._id}/>
            );
        });

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderCategoriesPosts}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        essentialsPost: state.postsReducers.essentialsPost,
        freelancePost: state.postsReducers.freelancePost,
        popularPost: state.postsReducers.popularPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularPostAction: () => dispatch(getPopularPostAction()),
        getEssentialsPostAction: () => dispatch(getEssentialsPostAction()),
        getFreelancePostAction: () => dispatch(getFreelancePostAction())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPostPage);