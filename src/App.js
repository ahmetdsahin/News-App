import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import "./App.css";
import { useEffect, useState } from "react";


function App() {
  
const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "b797c9a3524c4248bd761b0b1aaa6bae";

  const apiUrl = `https://newsapi.org/v2/everything?domains=aa.com.tr&apiKey=${API_KEY}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const incomingData = await response.json();
        setData(incomingData.articles);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Homepage generalData={data} />} />
      </Routes>
      {error && <div className="error">Error: {error}</div>}
    </Router>
  );
}

export default App;
