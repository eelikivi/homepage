import React, {Component} from 'react'
import Particles from 'react-particles-js'

import particleParams from './particles.json'

export default class IntroParticles extends Component {
	render() {

		return (
			<Particles
				width="100%"
				height="100%"
				className="Header__Particles--container"
				canvasClassName="Header__Particles__Canvas"
				params={particleParams}
			/>
		)
	}
}