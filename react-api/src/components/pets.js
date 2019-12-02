import React from 'react'

const Pets = ({ pets }) => {
  return (
    <div>
      <center><h1>Pets</h1></center>
      { pets.map((pet) => (
        <div key={pet.name} className="card">
          <div className="card-body">
	    <h5 className="card_title">{pet.name}</h5>
	    <h6 className="card-subtitle mb-2 text-muted">{pet.type}</h6>
	    <p className="card-text">{pet.description || "No description given"}</p>
	  </div>
	</div>
      ))}
    </div>
  )
};

export default Pets
