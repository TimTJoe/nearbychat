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
import Call from '@src/pages/call'
import Login from '@src/pages/login'
import Signup from '@src/pages/signup';
//COMPONENTS
import Navigation from "@components/Navigation"
import Message from "@components/messages"
import People from "@components/people"
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    {/* <Fragment> */}
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path='chat/:ChatID' element={<Home />} />
      </Route>
      <Route path='call/:CallerID' element={<Call />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
    {/* </Fragment> */}
    {/* <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)"
      }}>
      {
        matches => (
          <>
            {matches.small &&
              <Fragment>
                <Navigation />
                <Routes>
                  <Route path="/" element={<Message />} />
                  <Route path="messages" element={<Message />} />
                  <Route path="people" element={<People />} />
                </Routes>
              </Fragment>
            }
            {matches.medium &&
              <Fragment>
                <Navigation />
                <Routes>
                  <Route path="/" element={<Message />} />
                  <Route path="messages" element={<Message />} />
                  <Route path="people" element={<People />} />
                </Routes>
              </Fragment>
            }
            {matches.large &&
              <Fragment>
                <Routes>
                  <Route path="/" element={<Home socketID={socketID} />}>
                    <Route path='chat/:ChatID' element={<Home />} />
                  </Route>
                  <Route path='call/:CallerID' element={<Call />} />
                </Routes>
              </Fragment>
            }
          </>
        )
      }

    </Media> */}
    <Outlet />
  </Router>
)
