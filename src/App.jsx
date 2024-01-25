import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import { useState } from "react";


const App = () => {
   const [loading, setLoading] = useState(true);
   const spinner = document.getElementById("spinner");
   if (spinner) {
     setTimeout(() => {
       spinner.style.display = "none";
       spinner.style.transition = "2s";
       setLoading(false);
     }, 2000);
   }
  return (
    !loading && (
    <div className=''>
    
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
    </div>
    )
  );
}

export default App