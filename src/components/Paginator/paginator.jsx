import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/users-reducer'
import './paginator.css'

export default function Paginator() {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.loginPage.currentPage)
    const totalCount = useSelector(state => state.loginPage.totalCount)
    const perPage = useSelector(state => state.loginPage.perPage)
    let pagesCount = Math.ceil(totalCount / perPage)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const pageLimit = 5

    let portionSize = Math.ceil(pagesCount / pageLimit);
    const [portionNumber, setPortionNumber] = useState(1);

    let rightBorder = portionNumber * pageLimit
    let leftBorder = (portionNumber - 1) * pageLimit + 1

    const selectPage = (j) => {
        dispatch(getUsers(j, perPage))
    }
    console.log(leftBorder, 'leftBorder')
    return (
        <div className='numbers'>
            {
                portionNumber > 1 && <button className='pagebtn' onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>

            }
            {
                pages.filter(p => p >= leftBorder && p <= rightBorder)

                    .map(j => <span className={currentPage === j ? 'selected' : 'span'} onClick={() => selectPage(+j)} key={j}>{j}</span>)
            }
            {
                portionNumber < portionSize && <button className='pagebtn' onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }

        </div>
    )
}
