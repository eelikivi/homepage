import React, { Component } from 'react'
import NavigationItem from './navigation/NavigationItem'

export default class Navigation extends Component {

	render() {
		const navigationItems = this.props.data.map((item, i) => (
			<NavigationItem key={i} title={item.title} href={item.href} onClick={this.props.onClick} />
		))

		return (
			<ul className="Navigation__Menu list-unstyled d-flex flex-column flex-md-row">
				{navigationItems}
			</ul>
		)
	}
}
