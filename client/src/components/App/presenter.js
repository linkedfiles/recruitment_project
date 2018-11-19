import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from "prop-types";
//import { DashBoardPage } from "pages/DashBoard";
//import { LI_01, LI_02, LI_04, JI_01, JI_02, JI_04 } from "pages/LoginPage";
//test
import Auth from "components/Auth";
import Companies from "components/Companies";
import Mypage from "components/Mypage/presenter";
import JI_04 from "components/JI_04";



import TopNavbar from "../TopNavbar.js";
import Header from "components/Header";
import "./styles.scss";
 
const App = props => [
  props.isLoggedIn ? <Header key={1}/> : <Header key={1}/>,
  props.isLoggedIn ?  <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
];

App.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired,
}

 const PrivateRoutes = () => (
 <Router> 
  <Switch>
    <Route exact path="/" component={Companies} />,
    <Route path="/JI04" component={JI_04} />,
    <Route path="/Mypage" component={Mypage}/>
  </Switch>
  </Router> 
);

 const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />,
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
);


 export default App;