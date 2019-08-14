import React, {Component} from 'react'

import NavigationItem from './navigation/NavigationItem'

export default class Navigation extends Component {
	render() {
		return(
			<ul className="Navigation list-unstyled d-flex">
				<NavigationItem title="Home" href="" />
				<NavigationItem title="Test" href="messenger/" />
			</ul>
		)
	}
}
