import { Form, Row, Col, Button } from "react-bootstrap";

const Search = () => {
  return (
    <Form>
      <Row>
        <Col xs={1}>
        </Col>
        <Col sm={6} className='my-3'>
          <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="Search by character name" />
          </Form.Group>
        </Col>
        <Col sm={3} className='my-3'>
          <div className='d-grid'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Col>
        <Col xs={1}>
        </Col>
      </Row>
    </Form>
  )
}

export default Search