import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Text, Icon } from "gestalt";
import "gestalt/dist/gestalt.css";

import { LoginPage } from "pages/Registration";
import { CompanyInfoAdminPage, MemberAdminPage } from "pages/MyPage";

import Topmenu from "./components/LayOut/Topmenu";
import Footer from "./components/LayOut/Footer";

import BasicInput from "./components/InputForm/BasicInput";

class App extends Component {
  render() {
    return (
      <main className="main">
        <Router>
          <div>
            <Topmenu />
            <Route exact path="/" component={BasicInput} />
            <Route path="/loginpage" component={LoginPage} />
            <Route path="/companyadminpage" component={CompanyInfoAdminPage} />
            <Route path="/memberadminpage" component={MemberAdminPage} />
            <Route path="/compnayinfoadmin" component={CompanyInfoAdminPage} />
            <Route path="/recruitprset" component={CompanyInfoAdminPage} />
            <Route path="/subcriptiondue" component={CompanyInfoAdminPage} />
            <Route path="/memberinfoadmin" component={CompanyInfoAdminPage} />
          </div>
        </Router>
        <Footer />
      </main>
    );
  }
}

export default App;
