import React from 'react'

class NewPet extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('http://192.168.1.33:5000/pet/' + data.get('name'), {
      method: 'POST',
      body: data,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Pet name</label>
	<input id="name" name="name" type="text" />

	<label htmlFor="type">Type of pet</label>
	<input id="type" name="type" type="text" />

	<button>Submit</button>
      </form>
    );
  }
}

export default NewPet;
