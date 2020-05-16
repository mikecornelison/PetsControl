import React, { Component } from 'react';
import Pets from './components/pets';
import NewPet from './components/newPet';

class App extends Component {
	state = {
	    pets: []
	}

	componentDidMount() {
	fetch('http://192.168.1.27:5000/pets/')
	    .then(res => res.json())
	    .then((data) => {
		    this.setState({ pets: data })
	    })
	    .catch(console.log)
	}

	add(pet) {
	 this.setState({
		pets:  [...this.state.pets, pet]
	});
	}

	render() {
	return (
	    <div>	
	      <NewPet add={this.add.bind(this)} />
	      <Pets pets={this.state.pets} />
	    </div>	
	);
	}
}

export default App;
