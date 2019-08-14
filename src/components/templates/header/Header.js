import React, {Component} from 'react'

export default class Header extends Component {
	render() {

		return (
			<header>
				<div className="Header container">
					<div className="d-flex justify-content-between">
						<div>Header</div>
						<nav>
							<ul className="list-unstyled d-flex">
								<li className="mr-3"><a href={`${process.env.REACT_APP_BASE}/`}>Home</a></li>
								<li><a href={`${process.env.REACT_APP_BASE}/messenger/`}>Messenger</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		)
	}
}