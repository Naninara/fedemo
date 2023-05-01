import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/dashboard";
import Navbar from "./components/navbar";
import Cardetails from "./components/cardetails";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Payment from './components/payment';
import Viewstatus from "./components/viewstatus";
import Usersignup from "./components/usersignup";
import Bookingdetails from "./components/bookingdetails";
function App() {

  
  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/cardetails" element={<Cardetails />}></Route>
          <Route exact path="/payment" element={<Payment />}></Route>
          <Route exact path="/viewhistory" element={<Viewstatus />}></Route>
          <Route exact path="/usersignup" element={<Usersignup />}></Route>
          <Route exact path="/bookinghistory" element={<Bookingdetails />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
