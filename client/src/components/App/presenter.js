import React from "react";
import { Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "components/Auth";
import Companies from "components/Companies";
import Mypage from "components/Mypage/presenter";
import JI_04 from "components/JI_04/presenter";
import LI04 from "components/LI-04/presenter";
import JI_02 from "components/JI_02";
import JI_0201 from "components/JI_0201";
import Signup from "components/SignupForm";



import Header from "components/Header";
import LoginHeader from "components/LoginHeader/presenter";
import Footer from "components/Footer";
import "./styles.scss";
 
const App = props => [
  props.isLoggedIn ? <LoginHeader key={1}/> : <Header key={1}/>,
  props.isLoggedIn ?  <PrivateRoutes key={2} /> : <PublicRoutes key={2}/>,
  <Footer key={3} />
];

App.propTypes = {
    isLoggedIn : PropTypes.bool.isRequired,
}

 const PrivateRoutes = () => (

  <Switch>
    <Route exact path="/" component={Companies} />
    <Route path="/JI04" component={JI_04} />
    <Route path="/Mypage" component={Mypage}/>
  </Switch>

);

 const PublicRoutes = () => (

  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/JI04" component={JI_04} />
    <Route path="/LI04" component={LI04} />
    <Route path="/JI_02" component={JI_02} />
    <Route path="/JI_0201" component={JI_0201} />
    <Route path="/signup" component={Signup} />
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
 
);


 export default App;