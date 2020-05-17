import React from 'react'

class Pets extends React.Component {
  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(pet) {
    this.props.edit(pet);
  }

  render() {
    return (
      <div>
        <center><h1>Pets</h1></center>
        { this.props.pets.map((pet) => (
          <div key={pet.name} className="card">
            <div className="card-body">
        <h5 className="card_title">{pet.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{pet.type}</h6>
        <p className="card-text">{pet.description || "No description given"}</p>
        <a className="card-link" href='#' onClick={() => this.handleEdit(pet)}>Edit</a>
        <a className="card-link" href='#'>Delete</a>
      </div>
    </div>
        ))}
      </div>
    );
  }
}


export default Pets
