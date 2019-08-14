import React, {Component} from 'react'

export default class NavigationItem extends Component {
	render() {
		return(
			<li className="Navigation__Item">
				<a href={`${process.env.REACT_APP_BASE}/${this.props.href}`}>
					{this.props.title}
				</a>
			</li>
		)
	}
}
