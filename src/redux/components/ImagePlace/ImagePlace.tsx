import React, {Component} from "react";
import './ImagePlace.scss';
import {connect} from 'react-redux';
import {getPopularPostAction} from "../../actions/getPostsActions";

interface IProps {
    getPopularPostAction?: any,
    isLoading?: boolean,
    popularPost?: any,
}

class ImagePlace extends Component<IProps, {}>{
    componentDidMount() {
        this.props.getPopularPostAction();
    };

    render(){
        console.log(this.props.popularPost);
        const imageUrl = this.props.popularPost.featuredImage;


        return(
            <div>
                <img src="" alt=""/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        popularPost: state.postsReducers.popularPost,
        isLoading: state.postsReducers.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getPopularPostAction: () => dispatch(getPopularPostAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImagePlace);