import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="checkout" element={[<Header />, <Checkout />]} />
        <Route path="/" element={[<Header />, <Home />]} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
