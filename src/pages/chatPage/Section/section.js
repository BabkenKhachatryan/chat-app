import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { deleteMessage, editPost, emptyChat } from '../../../redux/chat-reducer';
import './section.css'

export default function Section() {
    const dispatch = useDispatch();
    const chats = useSelector(state => state.myChats.chats)
    const id = useParams();
    const [editNewPost, setEditNewPost] = useState('');
    const [isTrue, setIsTrue] = useState(false)
    const deleteMes = (id) => {
        dispatch(deleteMessage(id))
    }
    const changePost = (e) => {
        setEditNewPost(e.target.value)
    }
    const updateMyPost = (id, edit) => {
        if (edit !== '') {
            dispatch(editPost(id, edit))
            setIsTrue(false)
        } setIsTrue(false)
    }
    const showInp = (id) => {
        id === id && setIsTrue(!isTrue)
    }



    useEffect(() => {
        return () => {
            dispatch(emptyChat())
        }
    }, [id])
    return (
        <div>
            <div className='postmes'>
                {
                    chats.length > 0 && chats.map((i, index) =>
                        <div >
                            <div className='post'>
                                <p key={index} >{i.message}</p>
                            </div>
                            {
                                isTrue ?
                                
                                    <div>
                                        <input onChange={changePost} />
                                        <button type='button' onClick={() => updateMyPost(i,id, editNewPost)} className='editbtn'>Edit</button>
                                    </div> : ''
                            }
                            <button type='button' onClick={() => deleteMes(i.id)} className='delete'>X</button>
                            <button type='button' onClick={() => showInp(i.id, editNewPost)} className='edit'>I</button>

                        </div>
                    )
                }
            </div>
        </div>
    )
}
