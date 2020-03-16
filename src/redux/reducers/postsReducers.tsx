export const GET_LIST_POSTS_SUCCESS = 'GET_LIST_POSTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING'

const initialState = {
    listPosts: [],
    isLoading: false
};

function postsReducers(state: any = initialState, action: any) {
    switch (action.type) {
        case GET_LIST_POSTS_SUCCESS: {
            return {...state}
        }
        case IS_LOADING: {
            return {...state}
        }
        default:
            return state
    }
}