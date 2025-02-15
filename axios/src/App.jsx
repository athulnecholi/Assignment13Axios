import React, { useState, useEffect } from "react";
import axios from "axios";

const RickAndMortyFetcher = () => {
  const [dataType, setDataType] = useState("character"); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/${dataType}`);
        setItems(response.data.results); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dataType]); 

  return (
    <div>
      <h2>Rick and Morty Data Fetcher</h2>
      <label>Select Category: </label>
      <select value={dataType} onChange={(e) => setDataType(e.target.value)}>
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>
      
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyFetcher;
