import React, {Component} from 'react'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Child components
import Messenger from './messenger/Messenger'


export default class Main extends Component {

	render() {
		return (
			<main>
				<Messenger />
			</main>
		)
	}
}