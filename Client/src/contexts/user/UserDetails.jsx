import React, { createContext } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const UserContext = createContext(null)

export function UserDetailsProvider({ children }) {
    const { ChatID } = useParams();
    const [user, setUser] = useState({
        name: "Calvin Glee",
        id: "12hi3eksrisldis23kd",
        location: "Sinkor Monrovia",
        phone: "+231770934646",
        email: "calvinglee@yahoo.com",
        isLogin: true,
        avatar: null,
    });
    /**
     * Update a user detail
     * 
     * @param {String} fieldname Field to update
     * @param {Any} newValue New value
     */
    const updateUser = (fieldname, newValue) => {
        setUser({...user, [fieldname]: newValue })
    }
    //TODO: FETCH USER DATA FROM DB
    //TODO: CREATE HELPER FUNCTION TO BE USED WITHIN THE OBJECT getFullname() and setLoginStatus or getLocation and setLocation
    //TODO: 
    // const User = {
    //     fullname: "Calvin Glee",
    //     id: "12hi3eksrisldis23kd",
    //     location: "Sinkor Monrovia",
    //     phone: "+231770934646",
    //     email: "calvinglee@yahoo.com",
    //     isLogin: true,
    //     avatar: null,
    //     setName: (name) => {
    //         this.fullname = name;
    //     }
    // }


    const VALUES = {
        user,
        updateUser        
    }
    
    return (
        <UserContext.Provider value={VALUES}>{children}</UserContext.Provider>
    )
}

export default UserContext