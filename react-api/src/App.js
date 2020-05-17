import React, { Component } from 'react';
import Pets from './components/pets';
import PetForm from './components/petForm';

class App extends Component {
	state = {
		pets: [],
		petToEdit: {}
	}

	componentDidMount() {
	fetch('http://192.168.1.27:5000/pets/')
	    .then(res => res.json())
	    .then((data) => {
		    this.setState({ pets: data })
	    })
	    .catch(console.log)
	}

	submit(pet) {
		if(this.state.petToEdit === {}) {
			this.setState({
				pets:  [...this.state.pets, pet],
			});
		}
		else
		{
			this.setState(prevState => ({
				pets: prevState.pets.map(
					el => el.name === this.state.petToEdit.name ? pet: el
				)
			}));
		}
	}

	edit(pet) {
		this.setState({
			petToEdit: pet,
		});
	}

	render() {
	return (
	    <div>	
	      <PetForm submit={this.submit.bind(this)} petToEdit={this.state.petToEdit} />
	      <Pets pets={this.state.pets} edit={this.edit.bind(this)} />
	    </div>	
	);
	}
}

export default App;
