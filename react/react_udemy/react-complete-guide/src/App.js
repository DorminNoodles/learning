import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [
			{id: '1fefe', name: 'Max', age: 28},
			{id: '1szdf', name: 'Manu', age: 29},
			{id: '1dgf', name: 'Stepahnie', age: 26},
		],
		otherState: 'pouet',
		showPersons: false,
	}

	nameChangedHandler = (event, id) => {

		console.log("hello => " + id);
		const personIndex = this.state.persons.findIndex( p => {
			return p.id === id;
		});

		console.log(personIndex);

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		console.log(person);

		const persons = [...this.state.persons];
		persons[personIndex] = person;


		this.setState({persons: persons});

	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	togglePersonsHandler = () => {
		this.setState({showPersons: !this.state.showPersons});
	}

	render() {
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return <Person
							click={() => this.deletePersonHandler(index)}
							name={person.name}
							age={person.age}
							key={person.id}
							changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
					})}
				</div>
			);
			style.backgroundColor = 'red';
		}

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red'); //classes = ['red']
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold'); // classes = ['red', 'bold']
		}

		return (
			<div className="App">
				<h1>Hi, I m a React App</h1>
				<p className={classes.join(' ')}>This is working</p>
				<button
				 	style={style}
					onClick={this.togglePersonsHandler}>Toggle Name</button>
				{persons}
			</div>
		);
			// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi does works now ?'));
	}
}

export default App;
