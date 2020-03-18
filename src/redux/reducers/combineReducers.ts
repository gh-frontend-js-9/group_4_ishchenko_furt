import {listPosts,  isLoading} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    // listPosts:postsReducers,
    // isLoading:postsReducers
    listPosts,
    isLoading
});
export default rootReducers;