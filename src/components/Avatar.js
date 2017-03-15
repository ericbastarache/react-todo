import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

class Avatar extends Component {
  render () {
    return (
      <div>
        <Row>
          <Col xs={10}></Col>
          <Col xs={2}>
            <Image src="https://avatars0.githubusercontent.com/u/5018554?v=3" thumbnail circle />
          </Col>
        </Row>
      </div>
    );
  }
}

export default Avatar;
