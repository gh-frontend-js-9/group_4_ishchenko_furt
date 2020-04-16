import {
    getCommentsListReceiveAction,
    getEssentialsPostReceiveAction, getEssentialsThematicPostReceiveAction,
    getFeaturedPostReceiveAction, getFreelancePostReceiveAction, getFreelanceThematicPostReceiveAction,
    getListPostsReceiveAction, getNewPostReceiveAction,
    getPopularPostReceiveAction, getPopularThematicPostReceiveAction,
    isLoadingAction, sendCommentReceiveAction
} from "./PostsActionsCreators";
import {postsBlogService} from "../service/postsBlogService";

export function getListPostsAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getListPosts()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getListPostsReceiveAction(response.data.docs));
                console.log(response.data)
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
            );
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

export function getFreelanceThematicPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getFreelanceThematicPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getFreelanceThematicPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getPopularThematicPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getPopularThematicPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getPopularThematicPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getEssentialsThematicPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getEssentialsThematicPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getEssentialsThematicPostReceiveAction(response.data.docs));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getCommentsListAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getCommentsList()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getCommentsListReceiveAction(response.data));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function sendCommentAction(comment, name, email, replyTo) {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.sendComment(comment, name, email, replyTo)
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(sendCommentReceiveAction(response.data));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}

export function getNewPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getNewPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getNewPostReceiveAction(response.data));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}
