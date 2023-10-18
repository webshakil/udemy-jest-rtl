import React, { useState } from 'react';
import './Form.css'; // Import the CSS file

function MyForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // Initially disable the button

  const handleNameChange = (value) => {
    setName(value);
    setIsButtonDisabled(!value || !email); // Disable the button if name or email is empty
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setIsButtonDisabled(!name || !value); // Disable the button if name or email is empty
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the form submission logic here
  };

  return (
    <div className="form-container">
      <div data-testid="title" className="form-title">Login Form</div>
      <form onSubmit={handleSubmit} className="my-form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleNameChange(e.target.value)}
          placeholder="Enter your name"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
          placeholder="Enter your email"
        />

        <button
          type="submit"
          title="Submit Button"
          disabled={isButtonDisabled}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;