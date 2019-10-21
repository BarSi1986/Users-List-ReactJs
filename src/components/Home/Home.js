import React, { useContext } from 'react'
import UsersContext from '../../context/UsersContext'
import List from './List/List'
import Input from '../Home/Input/Input'
import './home.scss'


const Home = () => {

    const { title } = useContext(UsersContext)

    return (

        <div className='container'>
            <h1>{title}</h1>
            <Input />
            <List />
        </div>
    )
}

export default Home
