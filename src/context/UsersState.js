import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import UsersContext from './UsersContext'

const UsersState = props => {

    // header title
    const title = 'Users List'

    // initial users state
    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState(null)
    const [singleUser, setSingleUser] = useState({})
    const [userName, setUserName] = useState('')

    // set Loading spinner
    const [loading, setLoading] = useState(false)

    // fetch params
    const usersNumber = 500
    const nationality = 'gb'
    // const seed = 'abc' -- inactive param


    // api endpoint with number of results and nationality set to GB
    const usersAPI = `https://randomuser.me/api/?results=${usersNumber}&nat=${nationality}`


    // fetch users
    const getUsers = async () => {

        setLoading(true)

        const response = await fetch(usersAPI)
        const data = await response.json()
        setUsers(data.results)

        setLoading(false)
    }
    useEffect(() => {
        getUsers()
        // eslint-disable-next-line
    }, [])

    const isTheSame = (users) => {
        return users.login.uuid === userId
    }

    // get more information about user
    const getSingleUser = (e) => {

        const t = e.target.value
        setUserId(t)
    }

    useEffect(() => {
        setSingleUser(users.find(isTheSame))
        // eslint-disable-next-line
    }, [userId])


    // list of users fetched from api
    const userList = users
        .filter(user => (
            user.name.last.toLowerCase().indexOf(userName.toLowerCase()) >= 0
        ))
        .map(user => (
            <li key={user.login.uuid}>
                <img src={user.picture.large} alt="" />
                <p>{user.name.first} {user.name.last}</p>
                <Link to='/user'>
                    <button value={user.login.uuid} onClick={getSingleUser}>
                        show more
                </button>
                </Link>
            </li>
        ))
    // search users by name
    const searchUsers = (e) => {
        const t = e.target.value
        setUserName(t)
        const input = document.getElementById('label')
        t !== "" ? input.classList.add('notEmpty') : input.classList.remove('notEmpty')
    }

    // prevent




    return (
        <UsersContext.Provider
            value={{
                userList,
                title,
                loading,
                singleUser,
                searchUsers,
                userName,
            }}>
            {props.children}
        </UsersContext.Provider >
    )
}

export default UsersState
