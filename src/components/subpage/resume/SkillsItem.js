import React, { Component } from 'react';

export default class SkillsItem extends Component {
	render() {
		const fontSizeBase = 18;
		const fontSize = `${fontSizeBase * (1 + this.props.size / 3)}px`;
		const animationDelay = `-${(100 * Math.random()) / 100}s`;

		return (
			<li className={`Resume__Skills__Item mx-1${this.props.highlight ? ' highlight' : ''}`}>
				<span
					style={{
						fontSize,
						animationDelay,
					}}
				>
					{this.props.text}
				</span>
			</li>
		);
	}
}
