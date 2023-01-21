import React, { Fragment } from 'react'
import Media from 'react-media';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Outlet
} from "react-router-dom"
import Home from "@pages/home"
import Message from "@components/messages"
import People from "@components/people"

function App() {
	return (
		<>
			<Media queries={{
				small: "(max-width: 599px)",
				medium: "(min-width: 600px) and (max-width: 1199px)",
				large: "(min-width: 1200px)"
			}}>
				{
					matches => (
						<Fragment>
							{
								matches.small &&
								<Routes>
									<Route path="/" element={<Message />} />
									<Route path="messages" element={<Message />} />
									<Route path="people" element={<People />} />
								</Routes>

							}
							{
								matches.medium &&
								<Routes>
									<Route path="/" element={<Message />} />
									<Route path="messages" element={<Message />} />
									<Route path="people" element={<People />} />
								</Routes>
							}
							{
								matches.large &&
								<Routes>
									<Route path="/" element={<Home />} />
									<Route path="messages" element={<Message />} />
									<Route path="people" element={<People />} />
								</Routes>
							}
						</Fragment>
					)
				}
			</Media>
		</>
	)
}

export default App