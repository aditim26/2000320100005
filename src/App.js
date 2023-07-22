import { BrowserRouter, Routes, Route } from "react-router-dom";
import Alltrain from "./components/Alltrain";
import Navbar from "./components/Navbar";
import Detail from "./components/Detail";
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Alltrain/>}/>
      <Route path="/trains" element={<Alltrain/>} />
      <Route path="/detail/:number" element={<Detail/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
