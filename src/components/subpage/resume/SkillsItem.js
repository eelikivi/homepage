import React, { Component } from 'react'

export default class SkillsItem extends Component {
	render() {
		const fontSizeBase = 18;
		const size = { fontSize: `${fontSizeBase * (1 + (this.props.size / 3))}px` }
		return (
			<li className="Resume__Skills__Item mx-1">
				<span style={size}>{this.props.text}</span>
			</li>
		)
	}
}
