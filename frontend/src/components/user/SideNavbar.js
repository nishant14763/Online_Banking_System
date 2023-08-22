import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faFileAlt, faIdCard, faUser, faExchangeAlt, faUserPlus, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import './SideNavbar.css'; // Add your styling here

const SideNavbar = () => {
  return (
    <nav className="side-navbar">
      <ul>
        <li>
          <NavLink exact to="/profile/account-summary" activeClassName="active">
            <FontAwesomeIcon icon={faCreditCard} />
            Account Summary
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/statement" activeClassName="active">
            <FontAwesomeIcon icon={faFileAlt} />
            Account Statement
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/change-id" activeClassName="active">
            <FontAwesomeIcon icon={faIdCard} />
            Change User ID
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/profile" activeClassName="active">
            <FontAwesomeIcon icon={faUser} />
            User Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/transfer" activeClassName="active">
            <FontAwesomeIcon icon={faExchangeAlt} />
            Fund Transfer
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile/payee" activeClassName="active">
            <FontAwesomeIcon icon={faUserPlus} />
            Add Payee
          </NavLink>
        </li>
        <li class='log'>
          <NavLink to="/login" activeClassName="active">
            <FontAwesomeIcon icon={faPowerOff} />
            Logout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavbar;
