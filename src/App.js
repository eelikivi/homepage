import React, {Component} from 'react'

// ////////////////////////////////////////////////////////////////////////////////////////////////
// Components
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


// ////////////////////////////////////////////////////////////////////////////////////////////////
// Styles
import './scss/main.scss'


export default class App extends Component {
	render() {
		return (
			<>
				<Header />

				<Footer />
			</ >
		)
	}
}
