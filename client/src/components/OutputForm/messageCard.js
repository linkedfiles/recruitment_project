import React from "react";
import { Card, Button, CardTitle, CardText, Col } from "reactstrap";

class messagecard extends React.Component {
  render() {
    return (
      <div>
        <Col sm="6">
          <Card>
            <CardTitle>{this.props.cardtitle}</CardTitle>
            <CardText>{this.props.cardtext}</CardText>
            <Button>{this.props.cardbutton}</Button>
          </Card>
        </Col>
      </div>
    );
  }
}

export default messagecard;
