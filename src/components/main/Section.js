import React, { Component } from 'react'

export default class Section extends Component {
	render() {
		return(
			<div className="Section--container">
				<section className={`Section bg-white ${this.props.dir}`}>
					<div className="container">
						<p>Hi omnes lingua, institutis, legibus inter se differunt. Morbi fringilla convallis sapien, id pulvinar odio volutpat. Non equidem invideo, miror magis posuere velit aliquet. Me non paenitet nullum festiviorem excogitasse ad hoc.</p>
						<p>Gallia est omnis divisa in partes tres, quarum. Morbi odio eros, volutpat ut pharetra vitae, lobortis sed nibh. Quae vero auctorem tractata ab fiducia dicuntur. Nihil hic munitissimus habendi senatus locus, nihil horum?</p>
					</div>
				</section>
			</div>
		)
	}

}