import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import CreateAccount from "./components/CreateAccount";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/Reset Password";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
            <Route path="createAccount" element={<CreateAccount />}></Route>
            <Route path="resetPassword" element={<ResetPassword />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
