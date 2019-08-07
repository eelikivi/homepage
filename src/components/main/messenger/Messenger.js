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
					q: 'What1',
					a: 'That1'
				},
				{
					q: 'What2',
					a: 'That2'
				},
				{
					q: 'What3',
					a: 'That3'
				},
			],
			messages: []
		}
	}

	askQuestion(id) {
		console.log(this.state.data[id].q);
		console.log(this.state.data[id].a);
	}

	render() {
		const questions = this.state.data.map((item, index) =>
			<Question
				key={index}
				question={this.state.data[index].q}
				onClick={() => this.askQuestion(index)}
			/>
		)

		return (
			<section>
				<div className="Messenger container">
					<div className="row">

						<div className="Messenger__Screen col-md-5">
							{this.state.messages}
						</div>

						<div className="Messenger__Questions col-md-7">
							{questions}
						</div>

					</div>
				</div>
			</section>
		)
	}
}