import React from 'react'
import styled from "styled-components"


const Container = styled.div`
	max-height: 80vh;
	margin-top: auto;
	overflow-x: auto;

	&::-webkit-scrollbar {
    	width: 0;
	}
`

function Content({children}) {
	return (
		<Container>
			{children}
		</Container>
	)
}

export default Content