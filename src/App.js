import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Text, Icon } from "gestalt";
import "gestalt/dist/gestalt.css";

import { DoLogin, CompanyJoin, EmailJoin } from "pages/Registration";
import { CompanyInfoAdminPage, MemberAdminPage } from "pages/MyPage";

import TopNavbar from "./components/LayOut/TopNavbar";
import Tail from "./components/LayOut/Tail";

import BasicInput from "./components/InputForm/BasicInput";

class App extends Component {
  render() {
    return (
      <main className="main">
        <Router>
          <div>
            <TopNavbar />
            <Route exact path="/" component={BasicInput} />
            <Route path="/dologin" component={DoLogin} />
            <Route path="/companyadminpage" component={CompanyInfoAdminPage} />
            <Route path="/companyjoin" component={CompanyJoin} />
            <Route path="/memberadminpage" component={MemberAdminPage} />
            <Route path="/compnayinfoadmin" component={CompanyInfoAdminPage} />
            <Route path="/recruitprset" component={CompanyInfoAdminPage} />
            <Route path="/subcriptiondue" component={CompanyInfoAdminPage} />
            <Route path="/memberinfoadmin" component={CompanyInfoAdminPage} />
            <Route path="/emailjoin" component={EmailJoin} />
          </div>
        </Router>

        <Tail />
      </main>
    );
  }
}

export default App;
