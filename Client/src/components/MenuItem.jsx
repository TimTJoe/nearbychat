import React from 'react'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import MenuItem from '@mui/material/MenuItem';

const _MenuItem = styled(MenuItem)(({ theme }) => ({
	borderRadius: 12,
	marginRight: 8,
	marginLeft: 8,
	paddingTop: 8,
	paddingBottom: 8,
	"&:hover": {
		backgroundColor: grey[200]
	}
}))

export default _MenuItem