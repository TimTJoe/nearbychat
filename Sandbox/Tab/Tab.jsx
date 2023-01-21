import React, {useState} from 'react'
import { styled } from '@mui/material/styles';
import {grey} from "@mui/material/colors"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import {NavLink} from "react-router-dom"
import _Styled from "styled-components"
import StyledComponents from "styled-components"
// import AvatarIcon from "@icons/avatar.svg"

import {Active, InActive} from "./Tab/Status"
import Avatar from "./Tab/Avatar"
import ImageBlock from "./Tab/ImageBlock"
import Clock from "./Tab/Clock"
import text from "./text.json"

const MediaBlock = styled(Box)(({theme})=>({
	position: "relative",
	display: "flex",
	gap: 13,
	borderRadius: 12,
	padding: 6,
	marginLeft: 13,
	marginRight: 13,
	marginBottom: 19,
	marginTop: 19,
	textDecoration: "none",
	color: "black",
	"& > #imageblock":{ flex: 1},
	"& > #contentblock":{ flex: 2},
	"&:hover": {
	backgroundColor: grey[200],
	},
}))


const ContentBlock = styled(Box)(({theme})=>({
	paddingRight: 12
}))


const Name = styled(Typography)(({theme})=>({
	fontSize: "1rem",
	marginBottom: 2
}))

const Message = styled(Typography)(({theme})=>({
	fontSize: ".8rem",
	color: grey[700],
	lineHeight: 0
}))

const imageWrapper = _Styled.div`
	position: relative;
`


function Tab(props) {
	const [online, setOnline] = useState(true);

	const handleOnline = () => {
		if(online) {
			setOnline(false)
		} else {
			setOnline(true)
		}
	}
	return (
		<MediaBlock component={NavLink} to={`messages/${props.token}`} onClick={setOnline}>
			<ImageBlock id={"imageblock"}>
				<Avatar src={`icons/${props.avatar}`} alt={props.name} />
				{online ? <Active></Active>  : <InActive></InActive>}
			</ImageBlock>
			<ContentBlock id={"contentblock"}>
				<Name>
					{
						props.name.length > 18 ?
						`${props.name.substring(0, 18)}...` : props.name
					}
				</Name>
				<Message variant="caption">
					{
						props.text.length > 30 ?
						`${props.text.substring(0, 30)}...` : props.text
					}
				</Message>
			</ContentBlock>
			<Clock />
				{/* <Active variant="caption"></Active>  */}
		</MediaBlock>
	)
}

export default Tab