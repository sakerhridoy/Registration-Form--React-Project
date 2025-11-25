import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
  name : '',
  email : '',
  password : '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target 
    setFormData((prev)=>({...prev, [name]:value}))
  }
  return (
    <>
      <form>
        <div className="mb-3">
          <h2>REGISTRATION FORM</h2>
        </div>
        <div className="mb-3">
          <label>Name:</label>
          <br />
          <input name="name" type="text" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <br />
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <br />
          <input name="password" type="password" onChange={handleChange} />
        </div>
        <div className="mb-4">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default App;
