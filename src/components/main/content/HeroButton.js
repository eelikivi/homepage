import React, { Component } from 'react'

export default class HeroButton extends Component {
	render() {
		return (
			<li className="mx-3">
				<a
					href={this.props.href}
					target="_blank"
					rel="noreferrer noopener"
					className="link-white"
					aria-label={this.props.alt}
				>
					<i className={this.props.faIcon} />
				</a>
			</li>
		)
	}
}
