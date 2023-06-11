import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/resdetails")
      .then((response) => {
        setData(response.data.payload);
      })
      .catch((error) => alert("something went wrong!!"));
  }, []);

  const removeEntry = (id) => {
    const updatedData = data.filter((entry) => entry.id !== id);
    setData(updatedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>NAME</th>
          <th>QUERY</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry.id}>
            <td>{entry.id}</td>
            <td>{entry.name}</td>
            <td>
              <button onClick={() => removeEntry(entry.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;