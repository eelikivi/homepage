import React, { Component } from 'react'

export default class Portfolio extends Component {
	render() {
		return (
			<section className="Subpage bg-transparent">
				<div className="Subpage__Header">
					<div className="container">
						<h1>Portfolio</h1>
					</div>
				</div>
				<div className="Subpage-section">
					<div className="Portfolio container">
						<p>
							This is where you'll find some more information about the work I
							have completed.
						</p>

						<div className="row">
							<div className="Portfolio__Item col-md-8">
								<h4>Soluvisa</h4>
								<p className="small">2018-2019</p>
								<p>
									This project was made as my bachelor's thesis. The
									finished product is a website including a learning
									material and a quiz where people can learn to identify
									different white blood cells.
								</p>
								<p>
									Used technologies include:
									<ul>
										<li>PHP</li>
										<li>SQL</li>
										<li>HTML5</li>
										<li>JavaScript, jQuery</li>
									</ul>
								</p>
								<p>
									I built the application on top the CodeIgniter
									framework using MVC-principles.
								</p>
							</div>
							<div className="col-md-4" />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
