import React from 'react'
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';

const _IconButton = styled(IconButton)(({theme})=>({
	backgroundColor: grey[200]
}))

export default _IconButton