import React, {Component} from 'react'

// Content components
import Section from './Section'
import TextWithImage from './content/TextWithImage'

export default class Main extends Component {

	render() {
		return (
			<main>
				{/*<Section />*/}

				<div className="container">
					<TextWithImage
						options={{
							imgPos: 'left'
						}}
						content={
							<h2>Yes</h2>
						}
						img={{
							src: 'https://placekitten.com/300/200',
							alt: 'kitten'
						}}
					/>
				</div>

				<div className="container mt-4">
					<TextWithImage
						options={{
							imgPos: 'right'
						}}
						content={
							<h2>No</h2>
						}
						img={{
							src: 'https://placekitten.com/400/300',
							alt: 'kitten'
						}}
					/>
				</div>

			</main>
		)
	}
}