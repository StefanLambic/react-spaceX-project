import Launches from "./Launches";
import Error from "./Error";
import Nav from "./Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path = "/" element ={<Launches/>}/>
    <Route path='*' element={<Error />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App

