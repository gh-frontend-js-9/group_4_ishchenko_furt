import {listPosts} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    // listPosts:postsReducers,
    // isLoading:postsReducers
    listPosts
});
export default rootReducers;