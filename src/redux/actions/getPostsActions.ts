import {
    getEssentialsPostReceiveAction,
    getFeaturedPostReceiveAction, getFreelancePostReceiveAction,
    getListPostsReceiveAction,
    getPopularPostReceiveAction,
    isLoadingAction
} from "./PostsActionsCreators";
import {postsBlogService} from "../service/postsBlogService";

export function getPostsActions() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getListPosts()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getListPostsReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getFeaturedPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getFeaturedPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getFeaturedPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getPopularPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getPopularPosts()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getPopularPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getEssentialsPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getEssentialsPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getEssentialsPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getFreelancePostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getFreelancePost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getFreelancePostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}
