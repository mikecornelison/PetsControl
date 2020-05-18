import React from 'react'

class PetForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const targetName = this.props.petToEdit.name || data.get('name');

    fetch('http://192.168.1.27:5000/pet/' + targetName, {
      method: this.props.petToEdit ? 'PUT' : 'POST',
      body: data,
    });

    this.props.submit(Object.fromEntries(data));
  }

  render() {
    return (
    <form className="form" onSubmit={this.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Pet name</label>
        <input className="form-control" id="name" name="name" type="text" defaultValue={this.props.petToEdit.name || ""} />
      </div>
      <div className="form-group">    
        <label htmlFor="type">Type of pet</label>
        <input className="form-control"  id="type" name="type" type="text" defaultValue={this.props.petToEdit.type || ""} />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
    );
  }
}

export default PetForm;
