import React from 'react'
import { Link } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';
import "./Navigation.css"


function Navigation() {
	return (
		<div>
			{/* <Header /> */}
			<Menu />
		</div>
	)
}

export default Navigation