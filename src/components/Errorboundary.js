import React, {Component} from 'react';

class Errorboundary extends Component {
	constructor (props) {
		super (props);
		this.state = {
			hasErr : false
		}
	}

	componentDidCatch (error, info) {
		this.setState({hasErr : true})
	}

	render () {
		if (this.state.hasErr) {
			return(<h1>Opppps. This page doesn't exit</h1>)
		} else {
			return this.props.children	
		}
	}
}

export default Errorboundary;