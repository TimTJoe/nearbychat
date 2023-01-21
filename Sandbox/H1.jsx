import React from 'react'
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const _Typography = styled(Typography)(({ theme }) => ({
	padding: 12,
	fontSize: 24,
	fontWeight: 900,
	lineHeight: 1,
	border: "solid red"
}))

export default _Typography