import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{name: 'Max', age: 28},
			{name: 'Manu', age: 29},
			{name: 'Stepahnie', age: 26},
		],
		otherState: 'pouet',
		showPersons: false,
	}

	switchNameHandler = (newName) => {
		console.log('Clicked');

		this.setState({
			persons: [
				{name: newName, age: 28},
				{name: 'Manu', age: 29},
				{name: 'Stepahnie', age: 27}
			]
		});
	}

	nameChangedHandler = (event) => {
		this.setState({
			persons:[
				{name: 'Max', age: 28},
				{name: event.target.value, age: 29},
				{name: 'Stepahnie', age: 27}
			]
		})
	}

	togglePersonsHandler = () => {
		this.setState({showPersons: !this.state.showPersons});
	}

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'

		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map(person => {
						return <Person
							name={person.name}
							age={person.age} />
					})}
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I m a React App</h1>
				<p>This is working</p>
				<button
				 	style={style}
					onClick={this.togglePersonsHandler}>Switch Name</button>
				{persons}
			</div>
		);
			// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi does works now ?'));
	}
}

export default App;
