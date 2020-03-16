export const GET_LIST_POSTS_SUCCESS = 'GET_LIST_POSTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING'

// const initialState = {
//     listPosts: [],
//     isLoading: false
// };

// export function postsReducers(state: any = initialState, action: any) {
//     switch (action.type) {
//         case GET_LIST_POSTS_SUCCESS: {
//             return action.payload
//         }
//         case IS_LOADING: {
//             return action.isLoading
//         }
//         default:
//             return state
//     }
// }

export function listPosts(state:any = [], action:any) {
    switch (action.type) {
        case GET_LIST_POSTS_SUCCESS:
            return action.payload;

            default:
                return state;
    }
}