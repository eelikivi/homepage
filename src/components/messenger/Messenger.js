import React, { Component } from 'react'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Child components
import Question from './components/Question'
import Message from './components/Message'
import Dots from './components/Dots'

// Questions
import MessengerData from './messengerdata.json'

export default class Messenger extends Component {
	constructor() {
		super()

		this.state = {
			writing: false,
			data: MessengerData,
			sending: false,
			messages: [],
			maxMessages: 15,
			sent: 0
		}
	}

	askQuestion(id) {
		if (!this.state.writing && !this.state.sending) {
			this.setState(prevState => {
				// init array with a single message item
				const message = [
					<Message
						key={this.state.sent}
						data={{ content: this.state.data[id].q, from: false }}
					/>
				]

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

			// Add 500ms delay before showing that the other "person" is writing. Feels more realistic
			setTimeout(() => {
				this.setState({ writing: true })

				// add random delay minimum of 1s for answering
				const replyDelay = Math.random() * 1000 + 1000
				setTimeout(() => {
					this.setState(prevState => {
						// init array with a single message item
						const message = [
							<Message
								key={this.state.sent}
								data={{ content: this.state.data[id].a, from: true }}
							/>
						]

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
		const questions = this.state.data.map((item, index) => (
			<Question
				key={index}
				question={this.state.data[index].q}
				onClick={() => this.askQuestion(index)}
			/>
		))

		return (
			<section>
				<div className="Messenger container">
					<div className="row">
						<div className="Messenger__Screen col-md-8 col-lg-5 mb-3 mb-lg-0">
							{this.state.messages}
							{this.state.writing && <Dots />}
						</div>

						<div className="Messenger__Questions col-md-4 col-lg-7 align-self-end">
							<ul className="list-unstyled d-flex flex-wrap justify-content-center justify-content-md-start">{questions}</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
