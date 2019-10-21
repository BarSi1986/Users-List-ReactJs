import React from 'react'
import './about.scss'

const About = () => {
    return (
        <div className='about-container'>
            <h1>About App</h1>
            <p>Quite simple user list aplication which lets you get more details about each user by clicking the button right below avatar.</p>
            <p>It uses <strong><a target='blank' href="https://randomuser.me/">random user API</a></strong>  to fetch random users based on given params:</p>
            <ul>
                <li>number of users, which is set to 500</li>
                <li>nationality, set to Great Britain</li>
            </ul>
            <p>Input field lets you to search specific users by their last name.</p>

            <p>Below you will find some basic concepts and features that have been used to bulid this app:</p>
            <ul>
                <li>React Router</li>
                <li>context API</li>
                <li>React Hooks (use,State, useEffect, useContext)</li>
                <li>SASS (with .scss syntax)</li>
            </ul>
            <p>Deployment done on Netifly</p>
        </div>
    )
}

export default About
