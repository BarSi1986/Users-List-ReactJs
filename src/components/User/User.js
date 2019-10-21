import React, { useContext, Fragment } from 'react'
import UsersContext from '../../context/UsersContext'
import { Link } from 'react-router-dom'
import './user.scss'

const User = () => {

    const { singleUser } = useContext(UsersContext)

    return (
        <Fragment>
            {singleUser !== undefined && singleUser.name !== undefined &&
                <div className='user-container2'>
                    <div>
                        <img src={singleUser.picture.large} alt="avatar" />
                        <h1>{singleUser.name.first} {singleUser.name.last}</h1>
                    </div>

                    <ul>
                        <li>gender: <span>{singleUser.gender}</span></li>
                        <li>country: <span>{singleUser.location.country}</span> </li>
                        <li>location: <span>{singleUser.location.city}, {singleUser.location.street.name} {singleUser.location.street.number}</span> </li>
                        <li>phone number: <span>{singleUser.cell}</span> </li>
                        <li>email: <span>{singleUser.email}</span> </li>
                        <li>username: <span>{singleUser.login.username}</span> </li>
                        <li>password: <span> {singleUser.login.password}</span></li>
                    </ul>
                    <Link to='/'>
                        <button>back to search</button>
                    </Link>
                </div>
            }
        </Fragment >
    )
}

export default User
