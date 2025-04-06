import React, { useState } from "react";
import "../../styles/JoinEventPopup.css"; // Add styles
import { FaTimes } from "react-icons/fa"; 

const JoinEventPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("You have successfully joined the event!");
    onClose(); // Close the modal after submission
  };

  return (
    <div className="popup-overlay">
      <div className="popup-box">
      <button className="close-button" onClick={onClose}><FaTimes /></button>
        <h2>Join Event</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />

          <button type="submit">Submit</button>
        </form>
       
      </div>
    </div>
  );
};

export default JoinEventPopup;
