import {listPosts, isLoading, featuredPost, popularPost} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    // listPosts:postsReducers,
    // isLoading:postsReducers
    listPosts,
    isLoading,
     featuredPost,
    popularPost
});
export default rootReducers;