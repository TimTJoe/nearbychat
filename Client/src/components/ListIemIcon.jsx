import React from 'react'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import ListItemIcon from '@mui/material/ListItemIcon';

const _ListItemIcon = styled(ListItemIcon)(({theme})=>({
	"& .MuiSvgIcon-root": {
		width: 28,
		height: 28
	}
}))

export default _ListItemIcon