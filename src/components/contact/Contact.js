import React, { Component } from 'react'

export default class Contact extends Component {
	render() {
		return (
			<section>
				<div className="Contact container">
				<h2>Contact</h2>
					<div className="row">
						<div className="col-md-6">
							<p>I am physically located in the cold land up in the Northern Europe called Finland.</p>
							<p>Finland is the home country of Nokia, polar bears and people with a sense of sarcasm.</p>
						</div>
						<div className="col-md-6 d-flex justify-content-center align-items-center">
							<span>*Image here?*</span>
						</div>
					</div>
					<div className="row mt-8">
						<div className="col-md-12">
							<h4>Contact details:</h4>
							<p>Please send me a message via:</p>
							<ul>Facebook</ul>
							<ul>LinkedIn</ul>
							<ul>Email: eeli@kivikaarre.fi</ul>
							<p>if you want to be in touch with me for some reason, like work or anything really!</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
