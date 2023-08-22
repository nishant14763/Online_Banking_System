import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faFileAlt, faIdCard, faUser, faExchangeAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './SideNavbar.css'; // Add your styling here
import SideNavbar from './SideNavbar';

const UserProfile = () => {
  return (
    <div>
        <SideNavbar />
        <h1>User Profile</h1>
    </div>
  );
};

export default UserProfile;
