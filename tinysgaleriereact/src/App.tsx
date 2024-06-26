import { useState, useEffect } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Kunstwerken from './pages/Kunstwerken';
import Kunstenaars from './pages/Kunstenaars';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios.get('http://tinysgalerie.test/api/kunstwerken')
        .then(response => {
            setCount(response.data.message);
        })
        .catch(error => {
            console.error('There was an error fetching the data!', error);
        });
}, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kunstwerken" element={<Kunstwerken />} />
          <Route path="kunstenaars" element={<Kunstenaars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
