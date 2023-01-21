import React from 'react'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

const _IconButton = styled(IconButton)(({ theme }) => ({
	backgroundColor: grey[200],
	width: 46,
	height: 46,
	color: "#1877F2",
	"& svg.MuiSvgIcon-root": {
		width: 32,
		height: 32
	}
}))

export default _IconButton