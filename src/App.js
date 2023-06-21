import './App.css';
import Home from './pages/Home';
import Company from './pages/Company';
import Platform from './pages/Platform';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
    <div className="app">
    <BrowserRouter>
      <Routes>
        <Route 
        exact path="/" element={<Home/>}
        />
      <Route 
         path="company" element={<Company/>}
        />
          <Route 
         path="platform" element={<Platform/>}
        />
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
