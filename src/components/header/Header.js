import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Navigation from './Navigation'
import IntroParticles from './intro-particles/IntroParticles'

export default class Header extends Component {
	constructor(props) {
		super()
		this.state = {
			navOpen: false
		}


		this.toggleMobileNav = this.toggleMobileNav.bind(this)
		this.closeMobileNavNav = this.closeMobileNav.bind(this)
	}

	componentDidMount() {
		this.bindEvents();
	}

	handleScroll(e) {
		const toggle = document.getElementsByClassName('Navigation__Toggle')[0]
		if (window.scrollY > 128) {
			if (!toggle.classList.contains('magic')) {
				toggle.classList.add('magic')
			}
		} else {
			if (toggle.classList.contains('magic')) {
				toggle.classList.remove('magic')
			}
		}
	}

	bindEvents() {
		const nav = document.getElementsByTagName('nav')[0]
		document.querySelectorAll('body')[0].addEventListener('click', (e) => {
			if (!e.path.includes(nav)) {
				this.closeMobileNav()
			}
		})

		window.addEventListener('scroll', this.handleScroll)
	}

	closeMobileNav() {
		this.setState({ navOpen: false })
	}

	toggleMobileNav() {
		this.setState(prevState => ({ navOpen: !prevState.navOpen }))
	}

	render() {
		return (
			<header>
				<div className="Header container">
					<div className="d-flex justify-content-between align-items-center">
						<div className="Header__Brand">
							<Link to={`${process.env.REACT_APP_BASE}/`}>
								<img
									src="/img/icon/icons8-tardis-100-invert.png"
									alt="Tardis"
								/>
							</Link>
						</div>
						<button className="Navigation__Toggle" onClick={this.toggleMobileNav}>
							<span />
							<span />
							<span />
						</button>
						<nav className={`Navigation__Container d-flex align-items-center ${this.state.navOpen ? 'show' : ''}`} >
							<Navigation
								onClick={this.toggleMobileNav}
								data={[
									{ title: 'Home', href: '' },
									{ title: 'Resume', href: 'resume/' },
									{ title: 'Portfolio', href: 'portfolio/' },
									{ title: 'Contact', href: 'contact/' }
								]}
							/>
							<button className="Navigation__Close" onClick={() => {this.closeMobileNav()}}>
								<span></span>
								<span></span>
							</button>
						</nav>
					</div>
					<IntroParticles />
				</div>
			</header>
		)
	}
}
