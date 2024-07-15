
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Kunstwerken from './pages/Kunstwerken';
import Kunstenaars from './pages/Kunstenaars';
import './App.css'
import { HelmetProvider } from "react-helmet-async";
import FormPage from "./pages/FormPage";

function App() {

  return (
    <HelmetProvider>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="kunstwerken" element={<Kunstwerken />} />
                    <Route path="form" element={<FormPage />} />
                    <Route path="kunstwerken/:id" element={<Kunstwerken />} />
                    <Route path="kunstenaars" element={<Kunstenaars />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
