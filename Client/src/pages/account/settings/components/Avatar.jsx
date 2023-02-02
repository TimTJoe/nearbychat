import React from 'react'
import styled from "styled-components"
import { useParams, useNavigate } from 'react-router-dom'
import Avatar from "@mui/material/Avatar"
import PhotoCameraRounded from "@mui/icons-material/PhotoCameraRounded"

const AvatarContainer = styled.span`
    display: inline-block;
    position: relative;
    padding: 2px;
    border-radius: 50%;
`
const CustomAvatar = styled(Avatar)`
    && {
        width: 100px;
        height: 100px;
    }
`

const CameraIcon = styled.span`
    display: grid;
    place-items: center;
    position: absolute;
    bottom: 3px;
    right: -6px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(0,0,0,0.6);
    color: white;

    &&:hover {
    background-color: rgba(0,0,0,0.8);
    cursor: pointer;
    }
`


function _Avatar(props) {
    const { username } = useParams()
    const navigate = useNavigate();

    // alert(username)
    return (
        <AvatarContainer>
            <CustomAvatar src='' alt='Nothing' />
            <CameraIcon>
                <PhotoCameraRounded />
            </CameraIcon>
        </AvatarContainer>
    )
}

export default _Avatar