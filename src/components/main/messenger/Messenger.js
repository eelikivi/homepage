import React, {Component} from 'react'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Child components
import Question from './components/Question'
import Message from './components/Message'


export default class Messenger extends Component {
	constructor() {
		super()

		this.state = {
			writing: false,
			sending: false,
			data: [
				{
					q: 'What',
					a: 'That'
				},
				{
					q: 'What',
					a: 'That'
				},
				{
					q: 'What',
					a: 'That'
				},
			]
		}
	}

	render() {
		return (
			<section>
				<div className="Messenger">

				</div>
			</section>
		)
	}
}