import React from 'react'
import './CreateModal.css';
import {useState} from 'react';

const CreateModal = ({onClose, onSubmit,item}) => {
  console.log(item);
  const [formData,setFormData] = useState({
    name : item?.name,
    age : item?.age,
  }) 
  const handleChange = (e) =>{
    const {name,value} = e.target;
    setFormData({
      ...formData,
      [name] : value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); 
    onClose(); 
  };
  return (
    <div className = "modal overlay">
      <div className = "modal content">
        <form className = "input-group" onSubmit ={handleSubmit} >
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text"
              id = "name" 
              name = "name" 
              value = {formData.name}
              onChange={handleChange}
              required
             />
          </div>&nbsp;
          <div>
            <label htmlFor="age">Age</label>
            <input 
              type="text"
              id = "age" 
              name = "age" 
              value = {formData.age}
              onChange={handleChange}
              required
             />
          </div>&nbsp;
          <button type="submit" className="button-container"> Submit </button>
        </form>
      <button onClick = {onClose}>close modal</button>
      </div>
    </div>
  )
}


export default CreateModal