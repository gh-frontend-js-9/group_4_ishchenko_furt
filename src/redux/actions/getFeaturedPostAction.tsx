import {getFeaturedPostReceiveAction, isLoadingAction} from "./PostsActionsCreators";
import {postsBlogService} from "../service/postsBlogService";

export function getFeaturedPostAction() {

    return (dispatch: any) => {
        dispatch(isLoadingAction(true));

        postsBlogService.getFeaturedPost()
            .then((response: any) => {
                dispatch(isLoadingAction(false));
                dispatch(getFeaturedPostReceiveAction(response.data));
                console.log(response.data)
            })
            .catch(error =>
                dispatch((error.response))
            )
    }
}