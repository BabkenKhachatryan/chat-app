import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './footer.css'
import Send from '../../../image/send.png'
import File from '../../../image/file.png'
import { sendMesage } from '../../../redux/chat-reducer';

export default function Footer() {
    const [newMessage, setNewMessage] = useState();
    const [file, setFile] = useState();
    const idObject = useParams();
    const dispatch = useDispatch()
    const changeMessageValue = (e) => {
        setNewMessage(e.target.value)
    }
    const changeFileValue = (e) => {
        const url = URL.createObjectURL(e.target.files[0])
        setFile(url)
    }
    const sendNewMesage = () => {
        dispatch(sendMesage(newMessage, idObject.id, file));
    }
    return (
        <div className='sendlist'>
        <input type='text' className='textadd' name='message' onChange={changeMessageValue} />
        <div className='btn'>
            <button type='button' className='sendbtn' onClick={sendNewMesage}><img src={Send} className='send' alt='image' /></button>
            <label htmlFor='file'>
                <input type='file' id='file' onChange={changeFileValue} className='file-input' />
                <img className='addfile' src={File} />
                {
                    file && <img src={file} className='fileImg'/>
                }
                
            </label>
        </div>

    </div>
    )
}
