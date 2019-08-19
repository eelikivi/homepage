import React, { Component } from 'react'
import setSubpageAfterBg from '../../../helpers/subpage-helpers'

export default class Contact extends Component {
	componentDidMount() {
		setSubpageAfterBg()
	}

	render() {
		return (
			<section className='Subpage'>
				<div className='Subpage__Header'>
					<div className='container'>
						<h1>Contact</h1>
					</div>
				</div>
				<div className='Contact container pb-8'>
					<div className='row'>
						<div className='col-md-6'>
							<p>
								I am physically located in the cold land up in the Northern
								Europe called Finland.
							</p>
							<p>
								Finland is the home country of Nokia, polar bears and people
								with a sense of sarcasm.
							</p>
						</div>
						<div className='col-md-6 d-flex justify-content-center align-items-center'>
							<span>*Image here?*</span>
						</div>
					</div>
				</div>
				<div className='Subpage-section'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-12'>
								<h4>Contact details:</h4>
								<p>Please send me a message via:</p>
								<ul>
									<li>
										<a href='https://www.facebook.com/profile.php?id=100010089789239'>
											Facebook
										</a>
									</li>
									<li>
										<a href='https://kivikaarre.fi/linkedin'>
											LinkedIn
										</a>
									</li>
									<li>
										<a href='mailto:eeli@kivikaarre.fi'>
											Email
										</a>
									</li>
								</ul>
								<p>
									if you want to be in touch with me for some reason,
									like work or anything really!
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
