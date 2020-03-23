import {listPosts, isLoading, featuredPost} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    // listPosts:postsReducers,
    // isLoading:postsReducers
    listPosts,
    isLoading,
     featuredPost
});
export default rootReducers;