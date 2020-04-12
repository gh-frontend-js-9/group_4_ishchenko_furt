import React, {Component} from "react";
import {connect} from 'react-redux'
import {NameInput} from "../NameInput/NameInput";
import {EmailInput} from "../EmailInput/EmailInput";
import {Button} from "../Button/Button";
import './CommentsFormComponent.scss'
import {Checkbox} from "../Checkbox/Checkbox";

interface IState {
    comment?: any,
    name?: any,
    email?: any,
}

interface IProps {
    comment?: any,
    name?: any,
    email?: any,
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
    };

    render() {
        const {email, name, comment} = this.state;
        return (
            <form className="comments-form"
                  name='comments-form'
                  onSubmit={this.handleSubmit}>
                <textarea required
                          className='entry-field'
                          placeholder='Comment'
                          value={comment}
                          onChange={this.handleChange}/>
                <NameInput value={name}
                           onChange={this.handleChange}/>
                <EmailInput value={email}
                            onChange={this.handleChange}/>
                <Checkbox>
                    <span>
                        I agree to the <a>Terms and Conditions</a> and <a>Privacy Policy</a>
                    </span>
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
        // sendComment: state.sendMessage,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        // sendCommentAction: () => dispatch(sendCommentAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsFormComponent);

