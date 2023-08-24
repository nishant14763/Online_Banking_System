import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./components/Homepage";
import Login from "./components/Home/Login";
import Register from "./components/Home/Register";
import CreateAccount from "./components/CreateAccount";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/Reset Password";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";
import Sidebar from "./components/Sidebar";
import Admin from "./components/Home/AdminLogin";
import Customer from "./components/Home/Customer";

import AccountSummary from "./components/user/AccountSummary.js";
import AccountStatement from "./components/user/AccountStatement.js";
import ChangeUserId from "./components/user/ChangeCredentials.js";
import UserProfile from "./components/user/UserProfile.js";
import FundTransfer from "./components/user/FundTransfer";
import AddPayee from "./components/user/AddPayee";
import SideNavbar from "./components/user/SideNavbar";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="customer" element={<Customer />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="createAccount" element={<CreateAccount />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>
            <Route path="UserList" element={<UserList />}></Route>
            <Route path="UserDetails" element={<UserDetails />}></Route>
            <Route path="Sidebar" element={<Sidebar />}></Route>
            <Route path="Admin" element={<Admin />}></Route>

            <Route
              path="profile/account-summary"
              element={<AccountSummary />}
            ></Route>
            <Route
              path="profile/statement"
              element={<AccountStatement />}
            ></Route>
            <Route path="profile/change-id" element={<ChangeUserId />}></Route>
            <Route path="profile/profile" element={<UserProfile />}></Route>
            <Route path="profile/transfer" element={<FundTransfer />}></Route>
            <Route path="profile/payee" element={<AddPayee />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
