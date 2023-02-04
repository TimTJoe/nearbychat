import React, { useContext } from 'react'
import styled from "styled-components"
import { useParams, useNavigate } from 'react-router-dom'
//ICONS
import PersonRounded from "@mui/icons-material/PersonRounded"
import PhoneRounded from "@mui/icons-material/PhoneRounded"
import AlternateEmailRounded from "@mui/icons-material/AlternateEmailRounded"
import KeyRounded from "@mui/icons-material/KeyRounded"
//CUSTOM COMPONENTS
import Navigation from '../components/Navigation';
import Media from './components/Media';
import Avatar from './components/Avatar';
import UserContext from '@src/contexts/user/UserDetails'
import Modal from './modal'
import SettingContext, { SettingContextProvider } from './SettingContext'

const Content = styled.div`
    width: 400px;
    margin: 1.75rem auto 0 auto;
    min-height: 80vh;
    text-align: center;
`


function Settings() {
    const { username } = useParams()
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    return (

        <SettingContextProvider>
            <Navigation />
            <Content>
                <Avatar />
                <Media
                    icon={<PersonRounded />}
                    header="Full name"
                    value={user.name}
                />
                <Media
                    icon={<AlternateEmailRounded />}
                    header="Email"
                    value={user.email}
                />
                <Media
                    icon={<PhoneRounded />}
                    header="Phone"
                    value={user.phone}
                />
                <Media
                    icon={<KeyRounded />}
                    header="Password"
                    value="********"
                />
                <Modal />
            </Content>
        </SettingContextProvider>

    )
}

export default Settings