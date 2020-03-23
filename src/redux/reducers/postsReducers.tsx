export const GET_LIST_POSTS_SUCCESS = 'GET_LIST_POSTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING'
export const GET_FEATURED_POST_SUCCESS = 'GET_FEATURED_POST_SUCCESS'
export const GET_POPULAR_POST_SUCCESS = 'GET_POPULAR_POST_SUCCESS'

export function listPosts(state:any = [], action:any) {
    switch (action.type) {
        case GET_LIST_POSTS_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function featuredPost(state:any = [], action:any) {
    switch (action.type) {
        case GET_FEATURED_POST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function popularPost(state:any = [], action:any) {
    switch (action.type) {
        case GET_POPULAR_POST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function  isLoading(state=false , action:any) {
    switch (action.type) {
        case IS_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

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