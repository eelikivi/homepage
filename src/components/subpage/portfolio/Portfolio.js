import React, { Component } from 'react'
import setSubpageAfterBg from '../../../helpers/subpage-helpers'

export default class Portfolio extends Component {
	componentDidMount() {
		setSubpageAfterBg()
	}

	render() {
		return (
			<section className="Subpage">
				<div className="Subpage__Header">
					<div className="container">
						<h1>Portfolio</h1>
					</div>
				</div>
				<div className="pb-8">
					<div className="container">
						<div className="row">
							<div className="col-md-12 pb-8">
								<p>
									Here you'll find information about my personal projects
									and work I have been involved in.
								</p>
								<p>
									I have a couple of projects I am currently working on
									and hopefully they'll soon get to the point I can
									showcase them. In the meanwhile, here's some of things
									I am proud of:
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="Subpage-section">
					<div className="Portfolio container">
						<div className="row">
							<div className="Portfolio__Item col-md-8">
								<h4>Soluvisa</h4>
								<h6>
									<em>Blood Cell Quiz</em>
								</h6>
								<p className="small">2018-2019</p>
								<p>
									This project was made as my bachelor's thesis. The
									finished product is a website including a learning
									material and a quiz where people can learn to identify
									different white blood cells.
								</p>
								<p>Used technologies include:</p>
								<ul>
									<li>PHP</li>
									<li>SQL</li>
									<li>HTML5</li>
									<li>JavaScript, jQuery</li>
								</ul>
								<p>
									I built the application on top the CodeIgniter
									framework using MVC-principles. I also designed the
									website, planned usability training and an
									user experience test. I got valuable experience from all perspectives of creating a web project.
								</p>
								<p>I will share source codes upon request for employers!</p>
								<p>
									<a
										className="btn btn-primary"
										href="https://kivikaarre.fi/soluvisa/"
									>
										Visit Soluvisa
									</a>
								</p>
							</div>
							<div className="col-md-4 align-self-center text-center">
								<p className="text-muted">TODO: images</p>
							</div>
						</div>
					</div>
				</div>
				<div className="Subpage-section bg-purple text-white pb-0">
					<div className="Portfolio container">
						<div className="row">
							<div className="col-md-8">
								<h4>React Projects</h4>
								<p>
									I've absolutely fallen in love with React and I really
									like trying out various things with it. I have a couple
									of my personal projects on their way that use React and
									I hope I hope I'll get something together to showcase
									here before the end of the year.{' '}
									<small>It's August of 2019 now, btw..</small>
								</p>
							</div>
							<div className="col-md-12 my-5" />
							<div className="col-md-8">
								<p>
									At the moment my most finished React project is
									actually this website. I know it's mostly a static
									website using React components as pages, but still
									something I guess. Check it out on Github here:
								</p>
								<p>
									<a
										className="btn btn-primary"
										href="https://github.com/eelikivi/homepage"
										target="_blank"
										rel="noreferrer noopener"
									>
										React homepage
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
