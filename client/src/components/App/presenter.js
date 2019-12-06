import React from "react";
import { Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import Auth from "components/Auth";
import Companies from "components/Companies";
import Mypage from "components/Mypage/presenter";
import JI_03_01 from "components/JI_03_01";
import JI_04 from "components/JI_04/presenter";
import LI_04 from "components/LI_04/presenter";
import JI_02 from "components/JI_02";
import JI_0201 from "components/JI_0201";
import LI_03 from "components/LI_03/presenter";
import LI_03_01 from "components/LI_03_01/presenter";
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
    <Route path="/LI_03" component={LI_03} />
    <Route path="/LI_03_01" component={LI_03_01} />
    <Route path="/JI_04" component={JI_04} />
    <Route path="/JI_02" component={JI_02} />
    <Route path="/JI_0201" component={JI_0201} />
    <Route path="/LI_04" component={LI_04} />
    <Route path="/JI_03_01" component={JI_03_01} />
    <Route path="/Mypage" component={Mypage}/>
  </Switch>

 );

 const PublicRoutes = () => (

  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/JI_04" component={JI_04} />
    <Route path="/LI_03" component={LI_03} />
    <Route path="/LI_03_01" component={LI_03_01} />
    <Route path="/LI_04" component={LI_04} />
    <Route path="/JI_02" component={JI_02} />
    <Route path="/JI_0201" component={JI_0201} />
    <Route path="/signup" component={Signup} />
    <Route path="/recover" render={() => "recover password"} />
  </Switch>
 
);


 export default App;