import React, {Component} from 'react'
import { Link } from "react-router-dom";

import Navigation from './Navigation'
import IntroParticles from './intro-particles/IntroParticles'

export default class Header extends Component {
	render() {

		return (
			<header>
				<div className="Header container">
					<div className="d-flex justify-content-between">
						<div className="Header__Brand">
							<Link to={`${process.env.REACT_APP_BASE}/`}><img src="/img/icon/icons8-tardis-100-invert.png" alt="Tardis" /></Link>
						</div>
						<nav className="d-flex align-items-center">
							<Navigation />
						</nav>
					</div>
					<IntroParticles />
				</div>
			</header>
		)
	}
}