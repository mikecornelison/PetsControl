import React, { Component } from 'react';
import Pets from './components/pets';

class App extends Component {
	state = {
	    pets: []
	}

	componentDidMount() {
	fetch('http://192.168.1.33:5000/pets/')
	    .then(res => res.json())
	    .then((data) => {
		    this.setState({ pets: data })
	    })
	    .catch(console.log)
	}

	render() {
	return (
	    <Pets pets={this.state.pets} />
	);
	}
}

export default App;
