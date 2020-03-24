export const GET_LIST_POSTS_SUCCESS = 'GET_LIST_POSTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING'
export const GET_FEATURED_POST_SUCCESS = 'GET_FEATURED_POST_SUCCESS';
export const GET_POPULAR_POST_SUCCESS = 'GET_POPULAR_POST_SUCCESS';
export const GET_ESSENTIALS_POST_SUCCESS = 'GET_ESSENTIALS_POST_SUCCESS';
export const GET_FREELANCE_POST_SUCCESS = 'GET_FREELANCE_POST_SUCCESS';

export function featuredPost(state: any = [], action: any) {
    switch (action.type) {
        case GET_FEATURED_POST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function popularPost(state: any = [], action: any) {
    switch (action.type) {
        case GET_POPULAR_POST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function freelancePost(state: any = [], action: any) {
    switch (action.type) {
        case GET_FREELANCE_POST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}

export function essentialsPost(state: any = [], action: any) {
    switch (action.type) {
        case GET_ESSENTIALS_POST_SUCCESS:
            return action.payload;

        default:
            return state;
    }
}



const initialState = {
    listPosts: [],
    isLoading: false
};

export function postsReducers(state: any = initialState, action: any) {
    console.log( state)
    switch (action.type) {
        case GET_LIST_POSTS_SUCCESS:
            return {
                ...state.listPosts,
                listPosts:action.payload,
        };
        case IS_LOADING:
            return {
                ...state,
                 isLoading: action.payload
        };
        default:
            return state
    }
}