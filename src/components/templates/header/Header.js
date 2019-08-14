import React, {Component} from 'react'

import Navigation from './Navigation'
import IntroParticles from './intro-particles/IntroParticles'

export default class Header extends Component {
	render() {

		return (
			<header>
				<div className="Header container">
					<div className="d-flex justify-content-between">
						<div className="Header__Brand">
							<h1>Header</h1>
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