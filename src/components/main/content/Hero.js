import React, { Component } from 'react'

import HeroButton from './HeroButton'

export default class Hero extends Component {
	render() {
		return(
			<section className="Hero jumbotron d-flex justify-content-center">
				<div className="d-flex Hero__Title--container flex-column align-items-center">
					<h2 className="Hero__Title font-lazer84"><span>Eeli</span> <span>Kivikaarre</span></h2>
					<h3 className="Hero__Subtitle font-bebasneue">Web developer</h3>
					<ul className="Hero__Buttons list-unstyled d-flex">
						<HeroButton
							href='https://github.com/eelikivi'
							faIcon="fab fa-github"
						/>
						<HeroButton
							href='https://kivikaarre.fi/linkedin'
							faIcon="fab fa-linkedin-in"
						/>
					</ul>
				</div>
			</section>
		)
	}
}
