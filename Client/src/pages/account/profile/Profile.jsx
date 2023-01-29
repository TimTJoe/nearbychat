import React from 'react'
import styled from "styled-components"
import { useParams } from 'react-router-dom'
import Navigation from '../components/Navigation';
import Avatar from "@mui/material/Avatar"
import Container from '@mui/material/Container';
import PhotoCameraRounded from "@mui/icons-material/PhotoCameraRounded"
import PhoneRounded from "@mui/icons-material/PhoneRounded"
import VideoCallRounded from "@mui/icons-material/VideoCallRounded"
import EmailRounded from "@mui/icons-material/EmailRounded"
import IconButton from '@src/components/IconButtons';

const Content = styled.div`
    width: 400px;
    margin: 1.75rem auto 0 auto;
    min-height: 80vh;
    text-align: center;
`

const AvatarContainer = styled.span`
    display: inline-block;
    position: relative;
    border:  6px solid #00C85A;
    padding: 2px;
    border-radius: 50%;
    margin-bottom: 1.25rem;
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
    bottom: 0;
    right: -8px;
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
const Text = styled.p`
    font-size: 1.30rem;
    line-height: 1.4;
    margin:0;
`

const Strong = styled(Text)`
    font-weight: bolder;
    text-transform: capitalize;
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    padding: 12px 0;
`
const Media = styled.div`
    display:flex;
    text-align: left;
    gap: 24px;
    margin-bottom: 24px;
`
const Icon = styled.span`
`
const Details = styled.span``

function Profile() {
    const { username } = useParams()
    // alert(username)
    return (
        < >
            <Navigation />
            <Content>
                <AvatarContainer>
                    <CustomAvatar src='' alt='Nothing' />
                    <CameraIcon>
                        <PhotoCameraRounded />
                    </CameraIcon>
                </AvatarContainer>
                <Strong>{username}</Strong>
                <ButtonGroup>
                    <IconButton>
                        <PhoneRounded />
                    </IconButton>
                    <IconButton>
                        <VideoCallRounded />
                    </IconButton>
                </ButtonGroup>
                <Media>
                    <Icon>
                        <EmailRounded />
                    </Icon>
                    <Details>
                        <Strong>Email</Strong>
                        <Text>timtheme@yahoo.com</Text>
                    </Details>
                </Media>
                <Media>
                    <Icon>
                        <PhoneRounded />
                    </Icon>
                    <Details>
                        <Strong>Phone</Strong>
                        <Text>+231 0770 934 646</Text>
                    </Details>
                </Media>
            </Content>
        </ >
    )
}

export default Profile