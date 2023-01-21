import React from 'react'
// import styled from "styled-components"
import {green} from "@mui/material/colors"
import Avatar from "@mui/material/Avatar"
import { styled } from '@mui/material/styles';

const _Avatar = styled(Avatar)(({theme})=>({
	border: "solid red",
	borderColor: "transparent",
	objectFit: "contain"
}))

// const _Avatar = styled.img`
// 	max-width: 100%;
// 	width: 99%;
// 	height: 99%;
// 	object-fit: contain;
// 	border-radius: 16.8px/16.8px;
// `

export default _Avatar

