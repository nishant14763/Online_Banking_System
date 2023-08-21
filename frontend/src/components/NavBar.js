import React, {useState} from 'react';
import "./NavBar.css"
import { Route, Routes } from 'react-router-dom';
import AccountSummary from './AccountSummary';
import ChangeCredentials from './ChangeCredentials';
import UserProfile from './UserProfile';
import AccountStatement from './AccountStatement';
import FundTransfer from './FundTransfer';
import AddPayee from './AddPayee';

function NavBar() {
    const [active, setActive] = useState("account-summary");

    return(
        <div>
            <nav>
                <button onClick={() => {setActive("account-summary")}}>Account Summary</button>
                <button onClick={() => {setActive("account-statement")}}>Account Statement</button>
                <button onClick={() => {setActive("change-credentials")}}>Change User ID/Password</button>
                <button onClick={() => {setActive("user-profile")}}>User Profile</button>
                <button onClick={() => {setActive("fund-transfer")}}>Fund Transfer</button>
                <button onClick={() => {setActive("add-payee")}}>Add Payee</button>
            </nav>

            <div>
                {active ==="account-summary" && <AccountSummary/>}
                {active ==="account-statement" && <AccountStatement/>}
                {active ==="change-credentials" && <ChangeCredentials/>}
                {active ==="user-profile" && <UserProfile/>}
                {active ==="fund-transfer" && <FundTransfer/>}
                {active ==="add-payee" && <AddPayee/>}
            </div>          
        </div>
    );
}

export default NavBar;