import {listPosts, isLoading, featuredPost, popularPost, essentialsPost, freelancePost} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    // listPosts:postsReducers,
    // isLoading:postsReducers
    listPosts,
    isLoading,
    featuredPost,
    popularPost,
    freelancePost,
    essentialsPost
});
export default rootReducers;