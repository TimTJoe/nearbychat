import React, {useEffect, useState} from 'react'
import styled from "styled-components"
import Tooltip from "@mui/material/Tooltip"
import countdown from "countdown"

const Container = styled.div`
	min-width: 10px;
	max-height: 10px;
	position: absolute;
	top: 4px;
	right: 4px;
	border-radius: 16px/16px;
	font-size: .6rem;
	padding: .2rem;
	font-weight: bold;
	letter-spacing: 1px;
`

function Clock() {
	const [time, setTime] = useState("");
	const start = new Date("2022-12-31").getHours();
	let now = new Date("2023-02-01").getHours()
	const end = start - now
	return (
		<Tooltip title="Will disappear in 2hrs" arrow>
			<Container>
				11hrs left
			</Container>
		</Tooltip>
	)
}

export default Clock