
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Kunstwerken from './pages/Kunstwerken';
import Kunstenaars from './pages/Kunstenaars';
import './App.css'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="kunstwerken" element={<Kunstwerken />} />
          <Route path="kunstwerken/:id" element={<Kunstwerken />} />
          <Route path="kunstenaars" element={<Kunstenaars />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
