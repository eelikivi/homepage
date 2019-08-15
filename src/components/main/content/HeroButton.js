import React, { Component } from 'react'

export default class HeroButton extends Component {
	render() {
		return(
			<li className="mx-3">
				<a
					href={this.props.href}
					target="_blank"
					rel="noreferrer noopener"
					className="link-white"
				>
					<i className={this.props.faIcon}></i>
				</a>
			</li>
		)
	}
}
