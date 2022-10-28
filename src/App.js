import Header from "./Components/Header/Header";
import Chart from "./Components/Chat and Releases/Chart";
import Collection from "./Components/Collection/Collection";
import Tomorrows from "./Components/Collection/Tomorrows";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Components/AppNav/Nav";
/*
prev

<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.49334 2.586V8.966C9.49334 10.2727 8.07334 11.0927 6.94 10.4393L4.17334 8.846L1.40667 7.246C0.273338 6.59266 0.273338 4.95933 1.40667 4.306L4.17334 2.706L6.94 1.11266C8.07334 0.459329 9.49334 1.27266 9.49334 2.586Z" fill="white"/>
</svg>


next

<svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.506668 2.586V8.966C0.506668 10.2727 1.92667 11.0927 3.06 10.4393L5.82667 8.846L8.59334 7.246C9.72667 6.59266 9.72667 4.95933 8.59334 4.306L5.82667 2.706L3.06 1.11266C1.92667 0.459329 0.506668 1.27266 0.506668 2.586Z" fill="white"/>
</svg>

vol

<svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.515 0.835006C9.675 0.370006 8.6025 0.490006 7.5075 1.17251L5.3175 2.54501C5.1675 2.63501 4.995 2.68751 4.8225 2.68751H4.125H3.75C1.935 2.68751 0.9375 3.68501 0.9375 5.50001V8.50001C0.9375 10.315 1.935 11.3125 3.75 11.3125H4.125H4.8225C4.995 11.3125 5.1675 11.365 5.3175 11.455L7.5075 12.8275C8.1675 13.24 8.8125 13.4425 9.4125 13.4425C9.8025 13.4425 10.1775 13.3525 10.515 13.165C11.3475 12.7 11.8125 11.7325 11.8125 10.4425V3.55751C11.8125 2.26751 11.3475 1.30001 10.515 0.835006Z" fill="#EFEEE0"/>
</svg>



*/
function App() {

  return (
    <>
      <div className="bg-gray-800 py-16">
       
       <BrowserRouter>

       <Nav/>
       
      <Routes>
     
      <Route index element={<Header/>}></Route>
        <Route path="Tomorrows" element={<Tomorrows/>}></Route>
        <Route path="Collection" element={<Collection/>}></Route>
    

      </Routes>
       </BrowserRouter>
      </div>
    </>
  );
}

export default App;
