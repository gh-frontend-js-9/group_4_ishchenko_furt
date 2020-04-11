export const GET_LIST_POSTS_SUCCESS = 'GET_LIST_POSTS_SUCCESS';
export const IS_LOADING = 'IS_LOADING'
export const GET_FEATURED_POST_SUCCESS = 'GET_FEATURED_POST_SUCCESS';
export const GET_POPULAR_POST_SUCCESS = 'GET_POPULAR_POST_SUCCESS';
export const GET_ESSENTIALS_POST_SUCCESS = 'GET_ESSENTIALS_POST_SUCCESS';
export const GET_FREELANCE_POST_SUCCESS = 'GET_FREELANCE_POST_SUCCESS';
export const GET_FREELANCE_THEMATIC_POST_SUCCESS = 'GET_FREELANCE_THEMATIC_POST_SUCCESS';
export const GET_POPULAR_THEMATIC_POST_SUCCESS = 'GET_POPULAR_THEMATIC_POST_SUCCESS'
export const GET_ESSENTIALS_THEMATIC_POST_SUCCESS = 'GET_FREELANCE_ESSENTIALS_POST_SUCCESS'
export const GET_COMMENTS_LIST_SUCCESS = 'GET_COMMENTS_LIST_SUCCESS';

const initialState = {
    popularPost: [],
    freelancePost: [],
    essentialsPost: [],
    featuredPost: [],
    listPosts: [],
    freelanceThematicPost: [],
    popularThematicPost: [],
    essentialsThematicPost: [],
    commentsList:[],
    isLoading: false
};

export function postsReducers(state: any = initialState, action: any) {
    switch (action.type) {
        case GET_POPULAR_POST_SUCCESS:
            return {
                ...state,
                popularPost: action.payload,
            };
        case GET_FREELANCE_POST_SUCCESS:
            return {
                ...state,
                freelancePost: action.payload,
            };
        case GET_ESSENTIALS_POST_SUCCESS:
            return {
                ...state,
                essentialsPost: action.payload,
            };
        case GET_FEATURED_POST_SUCCESS:
            return {
                ...state,
                featuredPost: action.payload,
            };
        case GET_LIST_POSTS_SUCCESS:
            return {
                ...state,
                listPosts: action.payload,
            };
        case GET_FREELANCE_THEMATIC_POST_SUCCESS:
            return {
                ...state,
                freelanceThematicPost: action.payload,
            };
        case GET_POPULAR_THEMATIC_POST_SUCCESS:
            return {
                ...state,
                popularThematicPost: action.payload,
            };
        case GET_ESSENTIALS_THEMATIC_POST_SUCCESS:
            return {
                ...state,
                essentialsThematicPost: action.payload,
            };
        case GET_COMMENTS_LIST_SUCCESS:
            return {
                ...state,
                commentsList: action.payload,
            };
        case IS_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state
    }
}