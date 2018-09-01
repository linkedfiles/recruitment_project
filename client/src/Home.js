import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


import { DashBoardPage } from "pages/DashBoard";
import { LI_01, LI_02, LI_04, JI_01, JI_02, JI_04 } from "pages/LoginPage";
import Sample from "./pages/sample";


import TopNavbar from "./components/LayOut/TopNavbar";

class Home extends React.Component {
     componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res.express }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('api/adduser');
        const body = await response.json();
    
        if (response.status !== 200 ) throw Error(body.message);
    
        return body;
      };
    render() {
        return (
            <main className="main">
            <Router>
                <div>
                    <TopNavbar />
                    <Route exact path="/" component={DashBoardPage} />
                    <Route path="/dologin" component={LI_01} />
                    <Route path="/repasswordset" component={LI_02} />
                    <Route path="/guidepage" component={LI_04} />
                    <Route path="/emailjoin" component={JI_01} />
                    <Route path="/companyjoin" component={JI_02} />
                    <Route path="/hanadul" component={JI_04} />
                    <Route path="/sample" component={Sample} />         
                </div>
            </Router>
  
          
      
  
        </main>
      );
  
    }
}

export default Home;