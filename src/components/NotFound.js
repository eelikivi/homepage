import React, { Component } from 'react'

export default class NotFound extends Component {
	render() {
		return (
			<div className="d-flex justify-content-center h-100 flex-column align-items-center">
				<div className="mt-5">
					<h3 className="font-bebasneue text-white mt-4">Not found</h3>
					<h4 className="text-white mt-4">
						Sorry, this might still be under construction
					</h4>
				</div>
			</div>
		)
	}
}
