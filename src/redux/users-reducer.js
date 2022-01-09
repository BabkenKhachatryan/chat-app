import { sendRequest } from "../Api/api";

const SET_IS_FETCHING = 'SET_IS_FETCHING'
const GET_LOGIN_DATA = 'GET_LOGIN_DATA'
const GET_USER_DATA = 'GET_USER_DATA'
const GET_CURRENT_PAGE = 'GET_CURRENT_PAGE';
const GET_TOTAL_COUNT = 'GET_TOTAL_COUNT'

const initialState = {
    isFetching: false,
    loginData: [],
    items: [],
    currentPage: 1,
    perPage: 100,
    totalCount: 0
}

const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload
            }

        case GET_LOGIN_DATA:
            return {
                ...state,
                loginData: action.payload
            }
        case GET_USER_DATA:
            return {
                ...state,
                items: action.usersData
            }
            case GET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.payload,
            }
        case GET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default: return state
    }
}


export default UsersReducer;


const setIsFetching = (payload) => ({ type: SET_IS_FETCHING, payload });
const getLoginDataAC = (payload) => ({ type: GET_LOGIN_DATA, payload })
const getUserData = (usersData) => ({ type: GET_USER_DATA, usersData });
export const getTotalCount = (payload) => ({ type: GET_TOTAL_COUNT, payload })
export const getCurrentPage = (payload) => ({ type: GET_CURRENT_PAGE, payload})


export const getLoginData = (values) => {
    return (dispatch) => {
        dispatch(getLoginDataAC(values))
    }
}

export const getUsers = (currentPage, perPage) => {
    return async (dispatch) => {
        const response = await sendRequest(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage} &count=${perPage}`, 'GET');
        dispatch(getUserData(response.items));
        dispatch(getTotalCount(response.totalCount))
        dispatch(getCurrentPage(currentPage))
    }
}