import {GET_LIST_POSTS_SUCCESS, IS_LOADING} from "../reducers/postsReducers";

export function getListPostsReceiveAction(listPosts:any) {
    console.log(listPosts)
    return {
        type: GET_LIST_POSTS_SUCCESS,
        payload: listPosts
    };
}

export function isLoadingAction(bool:boolean) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}