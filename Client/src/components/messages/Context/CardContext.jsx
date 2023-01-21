import React, {createContext} from 'react'
import TextMessages from "../text.json"

const CardContext = createContext(null)

export function CardContextProvider({children}) {

	const context = {
		text: TextMessages
	}
	return (
		<CardContext.Provider value={context}>
			{children}
		</CardContext.Provider>
	)
}

export default CardContext