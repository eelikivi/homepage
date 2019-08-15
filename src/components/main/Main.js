import React, {Component} from 'react'

// Content components
import Section from './Section'

import Hero from './content/Hero'
import TextWithImage from './content/TextWithImage'

export default class Main extends Component {

	render() {
		return (
			<main>
				<Hero />

				{/*<div className="container">
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
					</div>*/}

					<Section
						dir="left"
						content={
							<>
								<h2>Hi!</h2>
								<p>I am a front-end developer and this is my website. It doesn't really have much content yet. Sorry :(</p>
								<p>More stuff and functionality will be added very soon!</p>
							</ >
						}
					/>

					<div className="mt-8 py-8 container">
						<h4 className="mt-5 font-bebasneue text-white text-center">Are you looking for "Soluvisa"?</h4>
						<div className="row mt-5">
							<div className="col-md-5">
								<figure className="FigureTwo">
									<img src="/img/soluvisa1.png" alt="Soluvisa" />
									<img src="/img/soluvisa2.png" alt="Soluvisa" />
								</figure>
							</div>
							<div className="col-md-7 text-white">
								<p>I did this project as my bachelor's thesis and I am very proud of it.</p>
								<p>The project was built with PHP and MySQL on the back end and I used jQuery for the quiz.</p>
								<p className="mt-5">
									<a className="btn btn-primary" href="https://kivikarre.fi/soluvisa">Visit Soluvisa</a>
									<br />
									<small>(In Finnish)</small>
								</p>
							</div>
						</div>
					</div>




			</main>
		)
	}
}