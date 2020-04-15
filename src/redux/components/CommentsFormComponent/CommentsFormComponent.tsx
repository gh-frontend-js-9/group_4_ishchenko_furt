import React, {Component} from "react";
import {connect} from 'react-redux'
import {NameInput} from "../NameInput/NameInput";
import {EmailInput} from "../EmailInput/EmailInput";
import {Button} from "../Button/Button";
import './CommentsFormComponent.scss'
import {Checkbox} from "../Checkbox/Checkbox";
import {sendCommentAction} from "../../actions/getPostsActions";
import {Content} from "../Content/Content";

interface IState {
    comment?: string,
    name?: string,
    email?: string,
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
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event: any) {
        event.preventDefault();
        const {email, name, comment} = this.state;
        this.props.sendCommentAction(comment, name, email);
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
                          rows={8}
                          name='comment'
                          className='entry-field textarea'
                          placeholder='Comment'
                          value={comment}
                          onChange={this.handleChange}/>
                <NameInput value={name}
                           name='name'
                           onChange={this.handleChange}/>
                <EmailInput value={email}
                            name='email'
                            onChange={this.handleChange}/>
                <Checkbox>
                    <Content greyColor>
                        I agree to the <a className='link' href='/'>Terms and Conditions</a> and <a className='link' href='/'>Privacy Policy</a>
                    </Content>
                </Checkbox>

                <div>
                    <Button disabled={!comment} type="submit">
                        Post Comment
                    </Button>
                </div>
            </form>
        )
    }
};
const mapStateToProps = (state: any) => {
    return {
        sendComment: state.postsReducers.sendComment,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendCommentAction: (comment: string, name: string, email: string) => dispatch(sendCommentAction(comment, name, email)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsFormComponent);

