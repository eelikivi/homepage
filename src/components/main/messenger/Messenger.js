import React, {Component} from 'react'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Child components
import Question from './components/Question'
import Message from './components/Message'
import Dots from './components/Dots'

export default class Messenger extends Component {
	constructor() {
		super()

		this.state = {
			writing: false,
			sending: false,
			data: [
				{
					q: 'How old are you?',
					a: 'I stopped aging at 25 in 2018'
				},
				{
					q: 'Where are you from?',
					a: 'I\'m from Finland'
				},
				{
					q: 'What is your favorite food?',
					a: 'Hot wings. Or ribs. And of course pizza. And maybe burgers too.'
				},
				{
					q: 'Your favorite animal?',
					a: 'Dog'
				},
				{
					q: 'Do you have any hobbies?',
					a: 'I play guitar'
				},
				{
					q: 'What would you do if you won the lottery?',
					a: 'Pay back my student loan. And travel. A lot'
				},
				{
					q: 'This is a nice website',
					a: 'Thanks :)'
				},
			],
			messages: [],
			maxMessages: 6,
			sent: 0
		}
	}

	askQuestion(id) {
		if (!this.state.writing && !this.state.sending) {
			this.setState(prevState => {
				// init array with a single message item
				const message = [<Message key={this.state.sent} data={{content: this.state.data[id].q, from: false}} />]

				// concat message-item array with state array
				const messages = message.concat(prevState.messages)

				// splice if necessary
				if (messages.length > this.state.maxMessages) {
					messages.splice(this.state.maxMessages, this.state.maxMessages)
				}

				return {
					messages,
					sending: true,
					sent: prevState.sent + 1
				}
			})

			// reply
			setTimeout(() => {
				this.setState({writing: true})

				const replyDelay = Math.random() * 1000 + 1000
				setTimeout(() => {
					this.setState(prevState => {
						// init array with a single message item
						const message = [<Message key={this.state.sent} data={{content: this.state.data[id].a, from: true}} />]

						// concat message-item array with state array
						const messages = message.concat(prevState.messages)

						// splice if necessary
						if (messages.length > this.state.maxMessages) {
							messages.splice(this.state.maxMessages, this.state.maxMessages)
						}

						return {
							messages,
							writing: false,
							sending: false,
							sent: prevState.sent + 1
						}
					})

				}, replyDelay)
			}, 500)
		}
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
							{this.state.writing && <Dots />}
						</div>

						<div className="Messenger__Questions col-md-7">
							<ul className="list-unstyled">
								{questions}
							</ul>
						</div>

					</div>
				</div>
			</section>
		)
	}
}