import React, { Fragment, useContext } from 'react'
import UsersContext from '../../context/UsersContext'
import './loading.scss'

const Loading = () => {

    const { loading } = useContext(UsersContext)

    return (
        <Fragment>
            {loading && <div className='spinnerGif'><img src="http://en.alpen1.com/assets/img/spin.gif" alt="spinner" /></div>}
        </Fragment>
    )
}

export default Loading
