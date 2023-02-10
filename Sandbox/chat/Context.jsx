import React, { createContext } from 'react'
import { useParams } from 'react-router-dom'

const ChatContext = createContext(null)

export function ChatContextProvider({ children }) {
    const { ChatID } = useParams()


    const VALUES = {
        ChatID
    }
    return (
        <ChatContext.Provider value={VALUES}>{children}</ChatContext.Provider>
    )
}

export default ChatContext