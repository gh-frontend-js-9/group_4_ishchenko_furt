import {getListPostsReceiveAction, isLoadingAction} from "./PostsActionsCreators";
import {postsBlogService} from "../service/postsBlogService";

export function getListPostsAction() {

    return (dispatch:any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getListPosts()
            .then((response:any) => {
                dispatch(isLoadingAction(false));
                dispatch(getListPostsReceiveAction(response.data));
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}