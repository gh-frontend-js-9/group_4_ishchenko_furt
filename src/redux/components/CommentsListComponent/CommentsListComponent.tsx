import React, {Component} from "react";
import {connect} from 'react-redux'
import {getCommentsListAction} from "../../actions/getPostsActions";
import Loading from "../Healpers/Loading";

interface IProps {
    getCommentsListAction?: any,
    commentsList?: any,
    isLoading?: boolean,
}

class CommentsListComponent extends Component <IProps, {}> {
    componentDidMount(): void {
        this.props.getCommentsListAction();
    }

    render() {
        let renderComment = this.props.commentsList.map((comment: any) =>
            // <CardCreatComment{...comment} key={project._id}/>);
            console.log(comment)
        )

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsListComponent);

