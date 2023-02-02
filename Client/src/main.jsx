import React, { Fragment } from 'react'
import ReactDOM from 'react-dom/client'
import Media from 'react-media';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom"
//PAGES
import Home from "@src/pages/home"
import Call from '@src/pages/call/audio'
import Video from '@src/pages/call/video'
import Login from '@src/pages/account/login'
import Signup from '@src/pages/account/signup';
import Settings from '@src/pages/account/settings';

//COMPONENTS
import Navigation from "@components/Navigation"
import Message from "@components/messages"
import People from "@components/people"
import Profile from '@pages/account/profile';
import './index.css'
import { UserDetailsProvider } from '@src/contexts/user/UserDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserDetailsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path='chat/:ChatID' element={<Home />} />
        </Route>
        <Route path='user/:username' element={<Profile />} />
        <Route path='call/:CallerID' element={<Call />} />
        <Route path='video/:CallerID' element={<Video />} />
        <Route path='settings' element={<Settings />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
      <Outlet />
    </Router>
  </UserDetailsProvider>
)
