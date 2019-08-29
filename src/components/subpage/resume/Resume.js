import React, { Component } from 'react'
import setSubpageAfterBg from '../../../helpers/subpage-helpers'

import ExperienceItem from './ExperienceItem'
import SkillsItem from './SkillsItem'
import ResumeBtn from './ResumeBtn'

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
						<div className="col-md-7 pb-8">
							<h2 className="">Eeli Kivikaarre</h2>
							<h5 className="mb-4">Web developer</h5>
							<p>
								I am an enthusiastic coding nerd who loves a challenge. My
								favorite color is <strong className="text-tardis">Tardis blue</strong> and I drink my coffee black.
							</p>
							<p>
								My dream is to improve my skills and gather as much experience
								as possible.
							</p>
							<p className="mt-4">
								<ResumeBtn
									text="LinkedIn"
									href="https://kivikaarre.fi/linkedin"
								/>
							</p>
						</div>
						<div className="col-md-5">
							<figure className="text-md-right">
								<img
									className="img-fluid"
									src="/img/eeli-kivikaarre.png"
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
								<div className="d-flex justify-content-center align-items-center">
									<ul className="Resume__Skills list-unstyled d-flex flex-wrap justify-content-center align-items-baseline w-75">
										<SkillsItem size={2} text="HTML5" />
										<SkillsItem
											size={7}
											text="JavaScript"
											highlight={true}
										/>
										<SkillsItem size={3} text="PHP" />
										<SkillsItem size={2} text="Git" />
										<SkillsItem size={2} text="ES6" />
										<SkillsItem
											size={6}
											text="React"
											highlight={true}
										/>
										<SkillsItem size={1} text="inVision" />
										<SkillsItem size={3} text="CSS" />
										<SkillsItem size={1} text="Photoshop" />
										<SkillsItem size={4} text="jQuery" />
										<SkillsItem size={3} text="SQL" />
										<SkillsItem
											size={2}
											text="Model-View-Controller"
										/>
										<SkillsItem
											size={4}
											text="SASS"
											highlight={true}
										/>
										<SkillsItem size={3} text="Web design" />
										<SkillsItem size={2} text="Frameworks" />
										<SkillsItem size={2} text="WordPress" />
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="Subpage-section bg-purple text-white left">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h5>Languages</h5>
								<ul>
									<li>English: fluent</li>
									<li>Finnish: mother tongue</li>
									<li>German: good</li>
									<li>Swedish: basics</li>
								</ul>
							</div>
							<div className="col-md-6">
								<h5>Hobbies</h5>
								<ul>
									<li>Guitar</li>
									<li>Video games & movies</li>
									<li>Programming</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
