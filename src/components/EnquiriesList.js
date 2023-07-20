import React, {useEffect, useState} from 'react';
import axios from 'axios';

const EnquiriesList = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
     axios.get('http://localhost:4000/api/enquiry').then(res=>{
      console.log(res.data)
      setEnquiries(res.data.data);
      return;
     })
     .catch(err=>{
        alert(err?.message);
     })
     .finally(()=>{
      setLoading(false);
     })
  },[])
  return (
    <div className="container mt-5">
    {loading ? <div>Loading... </div>:<div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title text-center">Enquiries List</h2>
            <table className="table table-bordered">
      <thead>
        <tr>
          <th>Source</th>
          <th>Destination</th>
          <th>Package</th>
          <th>Status</th>
          <th>Number of People</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Dep. Date</th>
        </tr>
      </thead>
      <tbody>
        {enquiries.map((enquiry, index) => (
          <tr key={index}>
            <td>{enquiry?.source}</td>
            <td>{enquiry?.destination}</td>
            <td>{enquiry?.package}</td>
            <td>{enquiry?.status}</td>
            <td>{enquiry?.person}</td>
            <td>{enquiry?.name}</td>
            <td>{enquiry?.email}</td>
            <td>{enquiry?.phone}</td>
            <td>{enquiry?.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
        </div>
      </div>
    </div>
    }
  </div>
  );
};

export default EnquiriesList;
