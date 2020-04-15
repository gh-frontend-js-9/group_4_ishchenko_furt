import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../../components/Healpers/Loading";
import {getNewPostAction} from "../../actions/getPostsActions";

interface IProps {
    getNewPostAction?: any,
    isLoading?: boolean,
    newPost?: any,
}

class NewPostComponent extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getNewPostAction();
    };

    render() {
        return (
            <>
                {this.props.isLoading ? <Loading/> : <> </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        newPost: state.postsReducers.newPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getNewPostAction: () => dispatch(getNewPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPostComponent);