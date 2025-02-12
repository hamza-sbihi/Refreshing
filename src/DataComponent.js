import React, { useState, useEffect } from 'react';
import './DataCompoenent.css';

const DataComponent = () => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    fetch('http://localhost:8080/api/student') // Replace with your backend URL
      .then(response => response.json())  // Convert response to JSON
      .then(data => {
        setData(data); // Save data in state
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); 

  if (loading) return <p>Loading...</p>;

  return (
    <div >
      <h2 className = "center">Fetched Data</h2>
      <div className = "center">
      <table >
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
        {data.map(item => (
          <tr key ={item.key}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>
              <button className ="create button"> Create</button>&nbsp;
              <button className = "update button"> Update</button>&nbsp;
              <button className = "delete button"> Delete</button>
            </td>
          </tr>
        ))}
      </table>
      </div>
    </div>
  );
};

export default DataComponent;
