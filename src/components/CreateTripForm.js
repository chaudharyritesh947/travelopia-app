import React, { useState } from 'react';
import axios from 'axios'; // Import Axios

const CreateTripForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    source: '',
    destination: '',
    package: '',
    person: '',
    status: '',
    name:'',
    email:'',
    phone:'',
    date:''
  });

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e)=> {
    e.preventDefault();
    // Perform form submission logic here (e.g., API call or store in database)
    console.log(formData);

    axios.post('http://localhost:4000/enquiry/create', {
    ...formData
    })
    .then((response) => {
       console.log(response)
       alert('Trip saved successfully')
       setFormData({
        source: '',
        destination: '',
        package: '',
        person: '',
        status: '',
        name:'',
        email:'',
        phone:'',
        date:''
      });
    })
    .catch((error) => {
      console.error('Login failed:', error);
    });

  };

  return  (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="card-title text-center mb-4">Create My Trip Now</h2>
            <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="source">Source:</label>
        <input
          type="text"
          className="form-control"
          id="source"
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="destination">Destination:</label>
        <input
          type="text"
          className="form-control"
          id="destination"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="package">Package:</label>
        <input
          type="text"
          className="form-control"
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="person">Person:</label>
        <input
          type="text"
          className="form-control"
          id="person"
          name="person"
          value={formData.person}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          className="form-control"
          id="status"
          name="status"
          value={formData.status}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          type="text"
          className="form-control"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          className="form-control"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary btn-block">
        Submit
      </button>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTripForm;
