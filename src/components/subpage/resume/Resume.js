import React, { Component } from 'react'
import setSubpageAfterBg from '../../../helpers/subpage-helpers'

import ExperienceItem from './ExperienceItem'
import SkillsItem from './SkillsItem'

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
											from: '04/2019',
											to: ' ',
											title: 'Junior front-end developer',
											employer: 'Liana Technologies',
											description:
												'I was offered a job after a succesful trainee-period.'
										}}
									/>
									<ExperienceItem
										data={{
											from: '01/2019',
											to: '04/2019',
											title: 'Front-end developer trainee',
											employer: 'Liana Technologies',
											description:
												'Creating websites and layouts for the in-house CMS using HTML, CSS, JavaScript'
										}}
									/>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="Subpage-section bg-white left">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h4>Education</h4>

								<ul className="Resume__Experience list-unstyled">
									<ExperienceItem
										data={{
											from: '2019',
											to: false,
											title:
												'Bachelor of Business Administration ',
											employer: 'Business Information Management',
											description:
												'Oulu University of Applied Sciences'
										}}
									/>
									<ExperienceItem
										data={{
											from: '2019',
											to: false,
											title: 'Bachelor of Arts',
											employer:
												'Information Management and Corporate Communications',
											description: 'Hochschule Neu-Ulm'
										}}
									/>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="Subpage-section bg-light">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h4>Top skills</h4>
								<div className="d-flex justify-content-center">
								<ul className="Resume__Skills list-unstyled d-flex flex-wrap justify-content-center align-items-center w-50">
									<SkillsItem size={2} text="HTML5" />
									<SkillsItem size={7} text="JavaScript" />
									<SkillsItem size={2} text="CSS" />
									<SkillsItem size={4} text="SASS" />
									<SkillsItem size={1} text="Git" />
									<SkillsItem size={1} text="InVision" />
									<SkillsItem size={1} text="Photoshop" />
									<SkillsItem size={6} text="React" />
									<SkillsItem size={3} text="PHP" />
									<SkillsItem size={5} text="SQL" />
								</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
