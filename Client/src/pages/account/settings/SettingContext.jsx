import React, { createContext, useState } from 'react'
const SettingContext = createContext(null)

export const SettingContextProvider = ({children}) => {
    const [open, setOpen] = useState(false);

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
        handleOpen
    }

    return (
        <SettingContext.Provider value={VALUES}>{ children }</SettingContext.Provider>
    )
}

export default SettingContext