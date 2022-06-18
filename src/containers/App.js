import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
// import {robots} from './robots'; put users on server instead
import './App.css'

class App extends Component {
	//create robots array and search field
	constructor () {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	//take robots array from server
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})})
	}

	//event listener from search field
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

	render () {
		//take change in search field and return searching result
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		//render web if empty then display 'loading'
		if (this.state.robots.length === 0) {
			return (<h1>Loading</h1>)
		} else {
			return (
			<div className='tc'>
				<h1 className='f1'>RoboFriends</h1>
				<Searchbox searchChange={this.onSearchChange}/> {/*search function*/}
				<Scroll> {/*putting scroll to robots card field*/}
					<Cardlist robots={filteredRobots} /> {/*robots card field display*/}
				</Scroll>
			</div>
			);
		}
	}
}

export default App;