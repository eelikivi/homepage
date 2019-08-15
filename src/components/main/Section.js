import React, { Component } from 'react'

export default class Section extends Component {
	render() {
		return(
			<div className="Section--container">
				<section className={`Section bg-white ${this.props.dir} ${this.props.angle}`}>
					<div className="container">
						{this.props.content}
					</div>
				</section>
			</div>
		)
	}

}