import "./App.css";
import Home from "./pages/Home";
import Company from "./pages/Company";
import Platform from "./pages/Platform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <div className="app">
        <BrowserRouter>
          <Routes  >
            <Route path="/" element={<Navbar />} >

            <Route index element={<Home />}/>
            <Route path="platform" element={<Platform />} />
            <Route path="customers" element={<PageNotFound/>} />
            <Route path="learning-center" element={<PageNotFound />} />
            <Route path="company" element={<Company />} />
            <Route path="pricing" element={<PageNotFound/>} />

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
