import React, {Component, useState} from "react";
import {connect} from 'react-redux'
import Loading from "../Healpers/Loading";
import {CommentCard} from "../CommentCard/CommentCard";
import {getCommentsListAction} from "../../actions/getPostsActions";
import {OutlineButton} from "../OutlineButton/OutlineButton";
import store from "../../store/storeConfig";
import {getUserIdAction} from "../../actions/PostsActionsCreators";

interface IProps {
    getCommentsListAction?: any,
    getUserIdAction?:any,
    commentsList?: any,
    isLoading?: boolean,
}

interface IState {
    comment?: string,
}

class CommentsListComponent extends Component <IProps, IState> {

    componentDidMount(): void {
        this.props.getCommentsListAction();
    }

    g(commentId, userName) {
        // const [count, setCount] = useState(0);
        // console.log(commentId, userName)
        this.props.getUserIdAction(commentId, userName)
        //     let g = store.getState().postsReducers.userName
        //     console.log(store.getState().postsReducers.userName)
    }



    render() {
        let renderComment = this.props.commentsList.map((comment: any) =>
            <CommentCard{...comment} key={comment._id}>
                <OutlineButton onClick={() => this.g(comment._id, comment.name)}>
                    Reply
                </OutlineButton>
            </CommentCard>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <>{renderComment}</>}
            </>
        )
    }
};
const mapStateToProps = (state: any) => {
    return {
        commentsList: state.postsReducers.commentsList,
        isLoading: state.postsReducers.isLoading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getCommentsListAction: () => dispatch(getCommentsListAction()),
        getUserIdAction: (commentId, userName) => dispatch (getUserIdAction(commentId, userName))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListComponent);

