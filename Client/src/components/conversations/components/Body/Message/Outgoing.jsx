import React from 'react'
import styled from "styled-components"
import Media from "./Media"
import Time from "./Time"
import Dot from "./Dot"

const Textbox = styled.p`
	background-color: #3486F4;
	padding:12px 10px;
	margin: 0;
	border-radius: 18px/18px;
	line-height: 1.1;
	font-size: .9rem;
	color: white;
	letter-spacing: .04rem;
`

const Flexbox = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 4px;
`



function Outgoing(props) {
	return (
		<Flexbox>
			<Media>
				{
					props.message
						? <>
							<Textbox>{props.message} </Textbox> <Time>Delievered <Dot /> 7:10am </Time>
						</>
						: null
				}
			</Media>
		</Flexbox>
	)
}

export default Outgoing