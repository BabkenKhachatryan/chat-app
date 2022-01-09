import { sendRequest } from "../Api/api";
import { uuid } from 'uuidv4';

const SEND_MESSAGE = 'SEND_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';
const EMPTY_CHATS = "EMPTY_CHATS";
const EDIT_POST = 'EDIT_POST';




const initialState = {
    users: [
    ],
    chats: [
    ],
}


const ChatReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const obj = {
                message: action.payload,
                src: action.src,
                id: uuid(),
            }
            return {
                ...state,
                chats: [...state.chats, obj]
            }
        case EMPTY_CHATS:
            return {
                ...state,
                chats: []
            }
        case DELETE_MESSAGE:
            return {
                ...state,
                chats: state.chats.filter((item) => item.id !== action.id)
            }
        case EDIT_POST:
            return {
                ...state,
                chats: state.chats.map((i) => i.id === action.id ? {...i,message: action.payload } : i)
            }
        default: return state
    }
}

export default ChatReducer;

export const sendMesage = (payload, src, id) => ({ type: 'SEND_MESSAGE', payload, src, id })
export const emptyChat = () => ({ type: "EMPTY_CHATS" });
export const deleteMessage = (id) => ({ type: 'DELETE_MESSAGE', id });
export const editPost = (id, payload) => ({ type: 'EDIT_POST', id, payload });