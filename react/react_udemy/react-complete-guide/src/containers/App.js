import React, { Component } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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

		let persons = null;
		let btnClass = '';

		if (this.state.showPersons) {
			persons = <Persons
						persons={this.state.persons}
						clicked={this.deletePersonHandler}
						chanded={this.nameChangedHandler} />;
		}

		return (
			<div className={classes.App}>
				<Cockpit
					showPersons={this.state.showPersons}
					persons={this.state.persons} />
				{persons}
			</div>
		);
			// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi does works now ?'));
	}
}

export default App;
