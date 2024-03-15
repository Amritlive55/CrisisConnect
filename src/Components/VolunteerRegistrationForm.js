import React, { useState } from "react";
import "./VolunteerRegistrationForm.css"; // Import CSS file

function RF2() {
  // State variables for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [interests, setInterests] = useState("");
  const [skills, setSkills] = useState("");
  const [address, setAddress] = useState("");
  const [previousExperience, setPreviousExperience] = useState("");
  const [availability, setAvailability] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform any validation or submission logic here
    // For this example, let's just log the form data
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("Interests:", interests);
    console.log("Skills:", skills);
    console.log("Address:", address);
    console.log("Previous Experience:", previousExperience);
    console.log("Availability:", availability);
  };

  return (
    <div className="volunteer-registration-form-container">
      <h2>Volunteer Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="interests">Interests:</label>
          <textarea
            id="interests"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="skills">Skills:</label>
          <input
            type="text"
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="previousExperience">Previous Experience:</label>
          <textarea
            id="previousExperience"
            value={previousExperience}
            onChange={(e) => setPreviousExperience(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="availability">Availability:</label>
          <textarea
            id="availability"
            value={availability}
            onChange={(e) => setAvailability(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RF2;