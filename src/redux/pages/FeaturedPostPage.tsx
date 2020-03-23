import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
//import {MainCard} from "../components/MainCard/MainCard";
//import {FeaturedImg} from "../components/FeaturedImg/FeaturedImg";
import './FeaturedPostPage.scss'
import {getFeaturedPostAction} from "../actions/getFeaturedPostAction";

interface IProps {
    getFeaturedPostAction?: any,
    isLoading?: boolean,
    featuredPost?: any,
}

class FeaturedPostPage extends Component <IProps, {}> {
    componentDidMount() {
         this.props.getFeaturedPostAction();
        console.log(this.props.getFeaturedPostAction())
    };

    render() {

        // let renderFeaturedPost = this.props.featuredPost.map((post: any, num:number) =>
        //     <div className='featured-post-page' key={num}>
        //         <FeaturedImg {...post}/>
        //         <MainCard greyColor {...post}/>
        //     </div>);

        return (
            <>
                {this.props.isLoading ? <Loading/> : <> </>}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        featuredPost: state.featuredPost,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getFeaturedPostAction: () => dispatch(getFeaturedPostAction()),
    };
};

  export default connect(mapStateToProps, mapDispatchToProps)(FeaturedPostPage);