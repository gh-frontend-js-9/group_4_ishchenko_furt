import {

    featuredPost,
    popularPost,
    essentialsPost,
    freelancePost,
    postsReducers,

} from "./postsReducers";
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    postsReducers,
    featuredPost,
    popularPost,
    freelancePost,
    essentialsPost
});
export default rootReducers;