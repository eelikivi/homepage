import React, { Component } from 'react'

export default class TextWithImage extends Component {
	render() {
		return(
			<section>
				<div className="Content--TextWithImage container">
					<div className="Content--TextWithImage--Container row">

						<div className={`Content--TextWithImage__Image col-md-6 ${this.props.options.imgPos === 'right' ? 'order-md-2' : 'order-md-1'}`}>
							<figure>
								<img className="img-fluid w-100" src={this.props.img.src} alt={this.props.img.alt} />
							</figure>
						</div>

						<div className={`Content--TextWithImage__Text col-md-6 ${this.props.options.imgPos === 'right' ? 'order-md-1' : 'order-md-2'}`}>
							{this.props.content}
						</div>
					</div>
				</div>
			</section>
		)
	}
}
