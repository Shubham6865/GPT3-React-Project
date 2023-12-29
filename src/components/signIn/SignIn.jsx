import React, { useState } from 'react';

const SignIn = ({ closeModal }) => {
 
    
          const [email, setEmail] = useState('');
          const [password, setPassword] = useState('');
        
          const handleSubmit = (e) => {
            e.preventDefault();
            
            console.log('Sign-in submitted:', { email, password });
            
            setEmail('');
            setPassword('');
          };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <h2>Sign In</h2>
        
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
      </div>
    </div>
  );
};

export default SignIn;
