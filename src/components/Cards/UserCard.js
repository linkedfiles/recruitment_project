import React from "react";
import {
  Button,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Media,
  Row,
  CardHeader,
  CardTitle
} from "reactstrap";

class UserCard extends React.Component {
  render() {
    return (
      <div>
        <Col md="12" sm="12" xs="12">
          <Card className="mb-3">
            <Row>
              <Col md="4">
                <CardBody>
                  <CardImg align width="100%" src={this.props.img} />
                </CardBody>
              </Col>
              <Col md="8">
                <CardBody>
                  <Col>
                    <CardTitle font="bold"> {this.props.name} </CardTitle>
                  </Col>
                  <Col>
                    <CardTitle> {this.props.email} </CardTitle>
                  </Col>
                </CardBody>
              </Col>
            </Row>
          </Card>
        </Col>
      </div>
    );
  }
}

export default UserCard;