import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state = {
		persons: [ { name: 'Sachin', age: 45 }, { name: 'Sehwag', age: 40 }, { name: 'Kohli', age: 30 } ],
		otherState: 'some other value',
		showPersons: false
	};

	switchNameHandler = (newName) => {
		//console.log('clicked');
		this.setState({
			persons: [ { name: newName, age: 45 }, { name: 'Sehwag', age: 40 }, { name: 'Kohli', age: 30 } ]
		});
	};

	nameChangedHandler = (event) => {
		//console.log('clicked');
		this.setState({
			persons: [ { name: 'Sachin', age: 45 }, { name: 'Sehwag', age: 40 }, { name: event.target.value, age: 30 } ]
		});
	};

	togglePersonHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow
		});
	};

	render() {
		const style = {
			backgroundColor: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer'
		};

		let person = null;

		if (this.state.showPersons) {
			person = (
				<div>
					<Person
						name={this.state.persons[0].name}
						age={this.state.persons[0].age}
						click={this.switchNameHandler.bind(this, 'Dravid')}
					>
						My Hobby is Programming
					</Person>
					<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
					<Person
						name={this.state.persons[2].name}
						age={this.state.persons[2].age}
						changed={this.nameChangedHandler}
					/>
				</div>
			);
		}

		return (
			<div className="App">
				<h1>Hi, I'm React App.</h1>
				<button style={style} onClick={this.togglePersonHandler}>
					Toggle Name
				</button>
				{person}
			</div>
		);
	}
}

export default App;
