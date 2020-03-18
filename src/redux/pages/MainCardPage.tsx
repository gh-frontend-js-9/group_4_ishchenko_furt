import React, {Component} from 'react'
import {connect} from 'react-redux'
import Loading from "../components/Healpers/Loading";
import {getListPostsAction} from "../actions/getListPostsAction";
import './MainCardPage.scss'
import Slider from "../components/Slider/Slider";

interface IProps {
    getListPostsAction?: any,
    isLoading?: boolean,
    listPosts?: any,
}

class MainCardPage extends Component <IProps, {}> {
    componentDidMount() {
        this.props.getListPostsAction();
    };

    render() {
        /*let renderMainCard = (

        )*/

        return (
            <>
                <div className='main-card-page'>
                    {console.log(...this.props.listPosts)}
                    <Slider content = {this.props.listPosts}  />
                </div>
               {/* {this.props.isLoading ? <Loading/> : <>{renderMainCard} </>}*/}
            </>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        listPosts: state.listPosts,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch: any) => {
    return {
        getListPostsAction: () => dispatch(getListPostsAction()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainCardPage);