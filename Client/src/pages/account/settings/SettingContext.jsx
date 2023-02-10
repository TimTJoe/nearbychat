import React, { createContext, useState, useContext } from 'react'
const SettingContext = createContext(null)
// import UserContext from '@src/contexts/user/UserDetails'


export const SettingContextProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [inputValue, setInputValue] = useState(null)
    const [value, setValue] = useState(null)
    const [label, setLabel] = useState("")
    // const { user, updateUser} = useContext(UserContext);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //CONTEXT VALUES
    const VALUES = {
        open,
        handleClose,
        handleOpen,
        inputValue,
        setInputValue,
        setLabel,
        label
    }

    return (
        <SettingContext.Provider value={VALUES}>{children}</SettingContext.Provider>
    )
}

export default SettingContext