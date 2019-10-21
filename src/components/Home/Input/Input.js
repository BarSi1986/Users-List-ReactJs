import React, { useContext } from 'react'
import UsersContext from '../../../context/UsersContext'
import './input.scss'

const Input = () => {

    const { searchUsers, userName } = useContext(UsersContext)

    return (
        <div className='form-container'>
            <form
                onSubmit={(e) => e.preventDefault()}
                className='from-form'
            >
                <div className="form-input">
                    <input
                        type="text"
                        name="search by name"
                        id='searchByName'
                        value={userName}
                        onChange={searchUsers}
                    />
                    <label id="label" htmlFor="searchByName">search by last name...</label>
                    <div className="input-bottom-bar"></div>
                </div>
            </form>
        </div>
    )
}

export default Input
