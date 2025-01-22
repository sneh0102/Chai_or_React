import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)
 
    if(!user) return <div>Please Login!!!</div>

    return <h2>Welcome {user.username}</h2>
}

export default Profile
 