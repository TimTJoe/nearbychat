import React from 'react'
import Header from "./components/Header"
import ActivePeople from "./components/ActivePeople"
import styled from "styled-components"

const Container = styled.div`
	/*border: solid red*/
`

function People() {
	return (
		<Container>
			<Header />
			<ActivePeople />
		</Container>
	)
}

export default People