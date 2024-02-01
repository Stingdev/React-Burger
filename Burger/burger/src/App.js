import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Wrong } from "./components/Wrong";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/menu"   element={<Menu/>}></Route>
        <Route path="/contact"  element={<Contact/>}></Route>
        <Route path="/about"  element={<About/>}></Route>
        <Route path="*" element={<Wrong/>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
