import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useState } from "react";



const Search = ( {onAdd} ) => {

  const [search, setSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()

    if(!search) {
      alert('box empty')
      return
    }

    onAdd({ search })
    setSearch('')
  }

  return (
    <Form onSubmit={onSubmit}>
      <Row className='searchContainer'>
        <Col xs={1}>
        </Col>
        <Col sm={6} className='my-3'>
          <Form.Group>
            <Form.Control
              type='text'
              id='amiiboSearch'
              aria-describedby='amiiboSearchBox'
              placeholder="Search by character name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col sm={2} className='my-3'>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Col>
        <Col xs={1}>
        </Col>
      </Row>
    </Form>
  )
}

export default Search