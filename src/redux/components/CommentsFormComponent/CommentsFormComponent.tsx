import React, {Component} from "react";
import {connect} from 'react-redux'
import {NameInput} from "../NameInput/NameInput";
import {EmailInput} from "../EmailInput/EmailInput";
import {Button} from "../Button/Button";

interface IState {
    comment?: any,
    name: any,
    email: any,
}

interface IProps {
    sendComment?: string,
    sendCommentAction?: any,
}

class CommentsFormComponent extends Component <IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            name: '',
            email: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const {value} = event.target;
        this.setState({
            comment: value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.setState({
            comment: '',
            name: '',
            email: ''
        })
    };

    render() {
        const {email, name, comment} = this.state;
        return (
            <form className="comments-form"
                  name='comments-form'
                  onSubmit={this.handleSubmit}>
                <textarea required
                          placeholder='Comment'
                          value={comment}
                          onChange={this.handleChange}/>
                <NameInput value={name}
                           onChange={this.handleChange}/>
                <EmailInput value={email}
                            onChange={this.handleChange}/>
                <Button disabled={!comment} type="submit">
                    Post Comment
                </Button>
            </form>
        )
    }
};
const mapStateToProps = (state: any) => {
    return {
        // sendComment: state.sendMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // sendCommentAction: (url: string, message: string) => dispatch(sendCommentAction(url, message)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsFormComponent);

