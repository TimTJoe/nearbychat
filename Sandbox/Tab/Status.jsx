import React from 'react'
import styled from "styled-components"
import {green} from "@mui/material/colors"

export const Active = styled.div`
	position: absolute;
	right: -4px;
	bottom: -4px;
	max-width: 12px;
	min-width: 12px;
	min-height: 12px;
	max-height: 12px;
	border: 3px solid white;
	border-radius: 23px;
	background-color: #1AD666;
	color: white;
	font-weight: normal;
	padding: 2px;
	font-size: .4rem;
	display: grid;
	place-items:center;
`

export const InActive = styled.div`
	position: absolute;
	right: 1px;
	bottom: -2px;
	max-width: 8px;
	min-width: 8px;
	min-height: 8px;
	max-height: 8px;
	border-radius: 23px;
	background-color: #FF3F3F;
	background-color: #FFA500;
	color: white;
	font-weight: normal;
	padding: 2px;
	font-size: .4rem;
	display: grid;
	place-items:center;
`

