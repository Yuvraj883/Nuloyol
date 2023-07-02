import "./App.css";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Platform from "./pages/Platform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes  >
            <Route path="/" element={<Navbar />} >

            <Route index element={<Home />}/>
            <Route path="company" element={<Company />} />
            <Route path="platform" element={<Platform />} />
            </Route>
            
           
          
          </Routes>
        </BrowserRouter>
        {/* <Company/>
    <Home/>
    <Platform/> */}
      </div>
    </>
  );
}

export default App;
