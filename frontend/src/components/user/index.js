import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SideNavbar from './SideNavbar';
import AccountSummary from './AccountSummary'; // Create similar components for other routes
import AccountStatement from './AccountStatement';
import ChangeUserId from './ChangeUserId';
import UserProfile from './UserProfile';
import FundTransfer from './FundTransfer';
import AddPayee from './AddPayee';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideNavbar />
        <div className="content">
          <Route exact path="/" component={AccountSummary} />
          <Route path="/statement" component={AccountStatement} />
          <Route path="/change-id" component={ChangeUserId} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/transfer" component={FundTransfer} />
          <Route path="/payee" component={AddPayee} />
        </div>
      </div>
    </Router>
  );
};

export default App;
