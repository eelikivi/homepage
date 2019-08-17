import React, {Component} from 'react'
import { Link } from "react-router-dom";

export default class NavigationItem extends Component {
	render() {
		return(
			<li className="Navigation__Item">
				<Link to={`${process.env.REACT_APP_BASE}/${this.props.href}`}>{this.props.title}</Link>
			</li>
		)
	}
}
