import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./components/Homepage";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/Reset Password";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Sidebar from "./components/Sidebar";
import Admin from "./components/Admin";
import Home from "./components/Home/Home";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="createAccount" element={<CreateAccount />}></Route>
            <Route path="dashboard" element ={<Dashboard/>}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>
          	<Route path="UserList" element={<UserList />}></Route>
          	<Route path="UserDetails" element={<UserDetails />}></Route>
          	<Route path="Sidebar" element={<Sidebar />}></Route>
            <Route path="Admin" element={<Admin />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
