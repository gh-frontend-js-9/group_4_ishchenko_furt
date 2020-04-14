import {
    GET_COMMENTS_LIST_SUCCESS,
    GET_ESSENTIALS_POST_SUCCESS, GET_ESSENTIALS_THEMATIC_POST_SUCCESS,
    GET_FEATURED_POST_SUCCESS, GET_FREELANCE_POST_SUCCESS, GET_FREELANCE_THEMATIC_POST_SUCCESS,
    GET_LIST_POSTS_SUCCESS, GET_NEW_POST_SUCCESS,
    GET_POPULAR_POST_SUCCESS, GET_POPULAR_THEMATIC_POST_SUCCESS,
    IS_LOADING, SEND_COMMENT_SUCCESS
} from "../reducers/postsReducers";

export function isLoadingAction(bool: boolean) {
    return {
        type: IS_LOADING,
        isLoading: bool
    };
}

export function getListPostsReceiveAction(listPosts: any) {
    return {
        type: GET_LIST_POSTS_SUCCESS,
        payload: listPosts
    };
}

export function getFeaturedPostReceiveAction(featuredPost: any) {
    return {
        type: GET_FEATURED_POST_SUCCESS,
        payload: featuredPost
    };
}

export function getPopularPostReceiveAction(popularPost: any) {
    return {
        type: GET_POPULAR_POST_SUCCESS,
        payload: popularPost
    };
}

export function getEssentialsPostReceiveAction(essentialsPost: any) {
    return {
        type: GET_ESSENTIALS_POST_SUCCESS,
        payload: essentialsPost
    };
}

export function getFreelancePostReceiveAction(freelancePost: any) {
    return {
        type: GET_FREELANCE_POST_SUCCESS,
        payload: freelancePost
    };
}

export function getFreelanceThematicPostReceiveAction(freelanceThematicPost: any) {
    return {
        type: GET_FREELANCE_THEMATIC_POST_SUCCESS,
        payload: freelanceThematicPost
    };
}

export function getPopularThematicPostReceiveAction(popularThematicPost: any) {
    return {
        type: GET_POPULAR_THEMATIC_POST_SUCCESS,
        payload: popularThematicPost
    };
}

export function getEssentialsThematicPostReceiveAction(essentialsThematicPost: any) {
    return {
        type: GET_ESSENTIALS_THEMATIC_POST_SUCCESS,
        payload: essentialsThematicPost
    };
}

export function getCommentsListReceiveAction(commentsList: any) {
    return {
        type: GET_COMMENTS_LIST_SUCCESS,
        payload: commentsList
    };
}

export function sendCommentReceiveAction(sendComment: any) {
    return {
        type: SEND_COMMENT_SUCCESS,
        payload: sendComment
    };
}

export function getNewPostReceiveAction(newPost: any) {
    return {
        type: GET_NEW_POST_SUCCESS,
        payload: newPost
    };
}