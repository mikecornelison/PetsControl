import React from 'react'

const Pets = ({ pets }) => {
  return (
    <div>
      <center><h1>My Pets</h1></center>
      { pets.map((pet) => (
        <div class="card">
          <div class="card-body">
	    <h5 class="card_title">{pet.name}</h5>
	    <h6 class="card-subtitle mb-2 text-muted">{pet.type}</h6>
	    <p class="card-text">Pet description goes here.</p>
	  </div>
	</div>
      ))}
    </div>
  )
};

export default Pets
