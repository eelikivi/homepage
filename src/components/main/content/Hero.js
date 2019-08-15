import React, { Component } from 'react'

export default class Hero extends Component {
	render() {
		return(
			<section className="Hero jumbotron d-flex justify-content-center">
				<div className="d-flex Hero__Title--container flex-column justify-content-center align-items-center">
					<h2 className="Hero__Title font-lazer84"><span>Lorem</span> <span>Ipsum</span></h2>
					<h3 className="Hero__Subtitle">Sit dolor amet</h3>
				</div>
			</section>
		)
	}
}
