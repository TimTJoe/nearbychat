import React from 'react'
import Avatar from "@mui/material/Avatar"
import GppGoodRounded from "@mui/icons-material/GppGoodRounded"
import GppMaybeRounded from "@mui/icons-material/GppMaybeRounded"
import VerifiedUserRounded from "@mui/icons-material/VerifiedUserRounded"
import VerifiedRounded from "@mui/icons-material/VerifiedRounded"
import { styled } from '@mui/material/styles'

const BigAvatar = styled(Avatar)(({ }) => ({
    width: 100,
    height: 100
}))


function _Avatar(props) {
    return (<> <BigAvatar src={props.src} alt={props.name} />  </>
    )
}

export default _Avatar