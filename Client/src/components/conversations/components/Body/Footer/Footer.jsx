import React from 'react'
import styled from "styled-components"
import Flexbox from "./Flexbox"
import Camera from './Camera'
import Photo from './Photo'
import Textarea from './Textarea'
import SendButton from './SendButton'

const Wrapper = styled.footer`
	border: solid red;
`

function Footer(props) {
	return (
		<Flexbox>
			<Camera />
			<Photo />
			<Textarea values={props.values} handleChange={props.handleChange} />
			<SendButton />
		</Flexbox>
	)
}

export default Footer