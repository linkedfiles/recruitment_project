import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const DashBoardPage = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">DashBoard</h1>
        <p className="lead">JUPSU</p>
        <hr className="my-2" />
        <p>JUPSU</p>
        <p className="lead">
          <Button color="primary">Button</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default DashBoardPage; 