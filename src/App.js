import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Text, Icon } from "gestalt";
import "gestalt/dist/gestalt.css";

import { DashBoardPage } from "pages/DashBoard";
import { DoLogin, CompanyJoin, EmailJoin } from "pages/Registration";
import { MemberAdminPage, CompanyInfoAdminPage, MemberInfoPage } from "pages/MyPage";


import TopNavbar from "./components/LayOut/TopNavbar";
import Tail from "./components/LayOut/Tail";
import { JoinTerm } from "components/Button"

import MiddleNavbar from "./components/LayOut/MiddleNavbar";


class App extends Component {

 
  render() {
    return (
      <main className="main">
        <Router>
          <div>
            <TopNavbar />
            <Route exact path="/" component={DashBoardPage} />
            <Route path="/dologin" component={DoLogin} />
            <Route path="/companyadminpage" component={CompanyInfoAdminPage} />
            <Route path="/companyjoin" component={CompanyJoin} />
            <Route path="/memberadminpage" component={MemberAdminPage} />
            <Route path="/recruitprset" component={CompanyInfoAdminPage} />
            <Route path="/subcriptiondue" component={CompanyInfoAdminPage} />
            <Route path="/memberinfopage" component={MemberInfoPage} />
            <Route path="/emailjoin" component={EmailJoin} />
          </div>
        </Router>

        
    

      </main>
    );
  }
}

export default App;
