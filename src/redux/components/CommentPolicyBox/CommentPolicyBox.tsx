import React, {Component} from 'react'
import {Title} from "../Title/Title";
import {OutlineButton} from "../OutlineButton/OutlineButton";
import {Content} from "../Content/Content";
import './CommentPolicyBox.scss'
import {getUserIdAction} from "../../actions/PostsActionsCreators";
import {connect} from "react-redux";

interface IProps {
    getUserIdAction?: any,
}

class CommentPolicyBox extends Component <IProps, {}> {

    cleanUserData(id, name) {
        let userData = {id, name};
        this.props.getUserIdAction(userData)
    }

    render() {
        return (
            <>
                <div className='comment-policy-box'>
                    <Title font='xxlFontSize'>
                        Comments
                    </Title>

                    <OutlineButton pinkColor onClick={() => this.cleanUserData([], [])}>
                        Leave a Comment
                    </OutlineButton>

                </div>
                <Content>
                    Comment policy: We love comments and appreciate the time that readers spend to share ideas and
                    give feedback.
                    However, all comments are manually moderated and those deemed to be spam or solely promotional will
                    be deleted.
                </Content>
            </>

        )
    }
};

const mapStateToProps = (state: any) => {
    return {
        isLoading: state.postsReducers.isLoading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUserIdAction: (userDate) => dispatch(getUserIdAction(userDate))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentPolicyBox);
