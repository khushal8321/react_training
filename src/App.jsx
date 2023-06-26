import React, { useState } from 'react';
let arraytodo=[];
function Todoapp() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input value:', inputValue);
    arraytodo.push(inputValue);
    
  };
 

  const renderList = arraytodo.map((item, index) => 
                               <div key={index}>{item}</div>
                             );
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h3>To Do List</h3>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Submit</button>
      
    </form>
    <div className="app">
    <div>The List contains:</div>
    {renderList}
  </div>
  <div>
    
  </div>
  </>);
}

export default Todoapp;
