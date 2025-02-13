import React, { useState, useEffect } from 'react';
import './DataCompoenent.css';
import CreateModal from './CreateModal';
const DataComponent = ({dark}) => {
  const [data, setData] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem,setSelectedItem] = useState(null);


  const fetchData = () =>{
    fetch('http://localhost:8080/api/student') 
    .then(response => response.json()) 
    .then(data => {
      setData(data); 
      setLoading(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setLoading(false);
    });
  }

  const deleteData = (id)  =>{
    fetch(`http://localhost:8080/api/student/${id}`,{
      method : 'DELETE'
    })
    .then(response => {
      if(response.ok){
        console.log("success");
        fetchData();
        }
      else console.error("failed")
    })
    .catch(error =>{
      console.error("Error : " , error);
    });
  }

  const createData = (e) => {
    console.log(e);
    fetch('http://localhost:8080/api/student',{
      method : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify(e)
    })
    .then((response) => response.json())
    .then(result => {
        console.log("success :", result);
        fetchData();
      
    })
    .catch(error =>{
      console.error("Error : ",error);
    });
  }
  const updateData = (id,e) => {
    console.log(e);
    fetch(`http://localhost:8080/api/student/${id}`,{
      method : 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body : JSON.stringify(e)
    })
    .then((response) => response.json())
    .then(result => {
        console.log("success :", result);
        fetchData();
      
    })
    .catch(error =>{
      console.error("Error : ",error);
    });
  }

  useEffect(() => {
    fetchData();
  }, []); 

  const openModal = (item)=>{
    setSelectedItem(item);
    console.log("Opening modal"); 
    setShowModal(true);
  }
  const closeModal = () => {
    console.log("Closing modal");
    setShowModal(false);
  };
  

  if (loading) return <p>Loading...</p>;

  

  return (
    <div >
      <h2 className = "center">Fetched Data</h2>
      <div className = "center">
      <button className ="create button" onClick = {() => openModal(null)}> Create new person</button>&nbsp;
      {showModal && ( 
        <CreateModal 
          onClose = {closeModal}
          onSubmit={(formData) => {
            if(selectedItem){
              updateData(selectedItem.id,formData)
            }
            else createData(formData)
          }}
          item = {selectedItem}
          />)}
      <table >
        <tr>
          <th className={dark?'th dark':'th light'}>Id</th>
          <th className={dark?'th dark':'th light'}>Name</th>
          <th className={dark?'th dark':'th light'}>Age</th>
          <th className={dark?'th dark':'th light'}>Actions</th>
        </tr>
        {data.map(item => (
          <tr key ={item.key}>
            <td className={dark?'td dark':'td light'}>{item.id}</td>
            <td className={dark?'td dark':'td light'}>{item.name}</td>
            <td className={dark?'td dark':'td light'}>{item.age}</td>
            <td className={dark?'td dark':'td light'}>
              
              <button className = "update button" onClick = {() => openModal(item) }> Update</button>&nbsp;
              <button className = "delete button" onClick = {() => deleteData(item.id)}> Delete</button>
            </td>
          </tr>
        ))}
      </table>
      </div>
      
    </div>
  );
};

export default DataComponent;
