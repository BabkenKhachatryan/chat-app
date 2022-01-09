import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Paginator from '../../components/Paginator/paginator'
import { getUsers } from '../../redux/users-reducer'
import './usersPage.css'
import Manphoto from '../../image/man.png'
import Header from '../../components/Header/header'
import { Link } from 'react-router-dom'


export default function UsersPage() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.loginPage.items)
    const currentPage = useSelector(state => state.loginPage.currentPage)
    const perPage = useSelector(state => state.loginPage.perPage)
    const totalCount = useSelector(state => state.loginPage.totalCount);
    
    useEffect(() => {
        dispatch(getUsers(currentPage, perPage))
    }, []);
    return (
        <div className='pagesUsers'>
            <div className='pages'>
                <Header/>
                {
                    users.length > 0 &&
                    users.map(i => <Link to={`/users/chat/${i.id}`}><div className='usersName'>
                        <img src={Manphoto} />
                        <h2 className={'user'}>{i.name}</h2>
                    </div></Link>)
                }
                <Paginator />
            </div>

        </div>
    )
}
