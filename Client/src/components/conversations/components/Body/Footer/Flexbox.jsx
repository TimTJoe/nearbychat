import React from 'react'
import styled from "styled-components"

const Container = styled.div`
	display: flex;
	gap: 12px;
	flex-wrap: nowrap;
	padding: 12px;
	border-top: thin solid #D9D9D9;
	align-items: center;
	/*align-items: baseline;*/
`

function Flexbox({children}) {
	return (
		<Container>
			{children}
		</Container>
	)
}

export default Flexbox