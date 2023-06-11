import React, { useState } from 'react';

function SendMessage() {
  const [fullName, setFullName] = useState('');
  const [seats,setSeats]=useState('');
  const [age, setAge] = useState('');
  const [description,setDescription]=useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      fullName,
      seats,
      age,
      description,
    };

    console.log('formData',formData)

    setFullName('');
    setSeats('');
    setAge('');
    setDescription('');
    
  };

  return (
    <div className="container mt-4">
      <h4>Details Form</h4>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6 mt-4">
            <label htmlFor="FullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="FullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="seats" className="form-label">seats</label>
            <input
              type="number"
              className="form-control"
              id="seats"
              value={age}
              onChange={(e) => setSeats(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="Age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              id="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6 mt-4">
            <label htmlFor="FullName" className="form-label">description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
         
          <div className="col-12 mt-5">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>

</div>
  );
}

export default SendMessage;
/////finance