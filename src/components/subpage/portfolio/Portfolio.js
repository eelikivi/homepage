import React, { Component } from 'react'
import setSubpageAfterBg from '../../../helpers/subpage-helpers'

export default class Portfolio extends Component {
	componentDidMount() {
		setSubpageAfterBg()
	}

	render() {
		return (
			<section className='Subpage'>
				<div className='Subpage__Header'>
					<div className='container'>
						<h1>Portfolio</h1>
					</div>
				</div>
				<div className='pb-8'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12 pb-8'>
								<p>
									This is where you'll find some more information about
									the work I have completed.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='Subpage-section'>
					<div className='Portfolio container'>
						<div className='row'>
							<div className='Portfolio__Item col-md-8'>
								<h4>Soluvisa</h4>
								<p className='small'>2018-2019</p>
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
									framework using MVC-principles.
								</p>
								<p>I will share source codes upon request for employers!</p>
								<p>
									<a
										className='btn btn-primary'
										href='https://kivikaarre.fi/soluvisa/'
									>
										Visit Soluvisa
									</a>
								</p>
							</div>
							<div className='col-md-4' />
						</div>
					</div>
				</div>
				<div className='Subpage-section bg-purple'>
					<div className='Portfolio container'>
						<div className='row'>
							<div className='Portfolio__Item col-md-8'>
								<h4>TODO: more content</h4>
							</div>
							<div className='col-md-4' />
						</div>
					</div>
				</div>
			</section>
		)
	}
}
