import React, { useState } from 'react';
import axios from 'axios';
import "./App.css";

function App() {
  const baseURL = "https://catfact.ninja/fact";
  const [fact, setFact] = useState(null);

  const getNewFact = () => {
    axios.get(baseURL).then((response) => {
      setFact(response.data.fact);
    }).catch((error) => {
      console.error("Error fetching cat fact:", error);
    });
  };

  return (
    <div>
      <button className='btn' onClick={getNewFact}>Generate Cat Fact</button>
      {fact && <p>{fact}</p>}
    </div>
  );
}

export default App;
