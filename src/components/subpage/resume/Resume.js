import React, { Component } from 'react'
import setSubpageAfterBg from '../../../helpers/subpage-helpers'

import ExperienceItem from './ExperienceItem'

export default class Resume extends Component {
	componentDidMount() {
		setSubpageAfterBg()
	}

	render() {
		return (
			<section className="Subpage">
				<div className="Subpage__Header">
					<div className="container">
						<h1>Resume</h1>
					</div>
				</div>
				<div className="Resume container">
					<div className="row">
						<div className="col-md-7">
							<h2 className="font-sans-serif">Eeli Kivikaarre</h2>
							<h5 className="font-sans-serif">Web developer</h5>
						</div>
						<div className="col-md-5">
							<figure>
								<img
									className="img-fluid"
									src="http://placekitten.com/800/600/"
									alt="Placeholder"
								/>
							</figure>
						</div>
					</div>
				</div>
				<div className="Subpage-section bg-light">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h4>Working experience</h4>

								<ul className="Resume__Experience list-unstyled">
									<ExperienceItem
										data={{
											from: '4/2019',
											to: '',
											title: 'Junior front-end developer',
											employer: 'Liana Technologies',
											description: 'I was offered a job after a succesful trainee-period.'
										}}
										/>
									<ExperienceItem
										data={{
											from: '1/2019',
											to: '4/2019',
											title: 'Front-end developer trainee',
											employer: 'Liana Technologies',
											description: 'Creating websites and layouts for the in-house CMS using HTML, CSS, JavaScript'
										}}
									/>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="Subpage-section bg-primary left">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h4>Working experience</h4>

								<ul className="Resume__Experience list-unstyled">
									<ExperienceItem
										data={{
											from: '4/2019',
											to: '',
											title: 'Junior front-end developer',
											employer: 'Liana Technologies',
											description: 'I was offered a job after a succesful trainee-period.'
										}}
										/>
									<ExperienceItem
										data={{
											from: '1/2019',
											to: '4/2019',
											title: 'Front-end developer trainee',
											employer: 'Liana Technologies',
											description: 'Creating websites and layouts for the in-house CMS using HTML, CSS, JavaScript'
										}}
									/>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
