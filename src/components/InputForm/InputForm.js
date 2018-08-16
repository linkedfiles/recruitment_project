import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class InputForm extends React.Component {
    
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for={this.porps.label}>Email</Label>
          <Input type={this.porps.type} name={this.porps.name} id={this.porps.id} placeholder={this.porps.placeholder} />
        </FormGroup>
      </Form>
    );
  }
}

export default InputForm