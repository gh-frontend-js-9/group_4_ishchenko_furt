import {
    GET_FEATURED_POST_SUCCESS,
    GET_LIST_POSTS_SUCCESS,
    GET_POPULAR_POST_SUCCESS,
    IS_LOADING
} from "../reducers/postsReducers";

export function isLoadingAction(bool:boolean) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}

export function getListPostsReceiveAction(listPosts:any) {
    return {
        type: GET_LIST_POSTS_SUCCESS,
        payload: listPosts
    };
}

export function getFeaturedPostReceiveAction(featuredPost:any) {
    return {
        type: GET_FEATURED_POST_SUCCESS,
        payload: featuredPost
    };
}
export function getPopularPostReceiveAction( popularPost:any) {
    return {
        type: GET_POPULAR_POST_SUCCESS,
        payload: popularPost
    };
}
