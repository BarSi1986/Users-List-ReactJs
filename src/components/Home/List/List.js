import React, { useContext } from 'react'
import UsersContext from '../../../context/UsersContext'
import './list.scss'

const List = () => {
    const { userList } = useContext(UsersContext)
    return (
        <ul className='list-container'>
            {userList}
        </ul>
    )
}
export default List
