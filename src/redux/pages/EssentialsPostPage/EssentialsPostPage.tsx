import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {getEssentialsPostAction} from "../../actions/getPostsActions";
import {BoxCard} from "../../components/BoxCard/BoxCard";

interface IProps {
    getEssentialsPostAction?: any,
    essentialsPost?: any,
    isLoading?: boolean,
}

class EssentialsPostPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getEssentialsPostAction();
    };

    render() {
        let renderEssentialsPost = this.props.essentialsPost.map((post: any) => {
            return <BoxCard {...post} key={post._id}/>;
        });

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> {renderEssentialsPost}</>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        essentialsPost: state.postsReducers.essentialsPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getEssentialsPostAction: () => dispatch(getEssentialsPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EssentialsPostPage);