import React, { Component } from 'react'

export default class ExperienceItem extends Component {
	render() {
		return (
			<li className="Resume__Experience__Item mb-6">
				<div className="Resume__Experience__Item--container row">
					<div className="col-3">
						<span>
							{this.props.data.from} {!(!this.props.data.to) && '—'} {this.props.data.to}
						</span>
					</div>
					<div className="col-9">
						<h4>{this.props.data.title}</h4>
						<h5>{this.props.data.employer}</h5>
						<p>{this.props.data.description}</p>
					</div>
				</div>
			</li>
		)
	}
}
