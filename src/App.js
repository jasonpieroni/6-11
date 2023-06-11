import React, {useState} from 'react'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [message, setmessage] = useState('')

  const handleChange = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setmessage(`Hello ${name}!`)
  }
  return (
    <div className="App">
      <h1>Enter Name</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='text'>Name:</label>
      <input type='text' name='text' value={name} onChange={handleChange} />
      <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default App;
