import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from 'react-bootstrap/AccordionButton';

const Display = ({ amiibo }) => {

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
      <div
        type="div"
        style={{ backgroundColor: '#222', padding: 'none'}}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  }

  if (amiibo === undefined) {
    return
  }

  const listItems = amiibo.map((figure) =>

    <Accordion defaultActiveKey="0">
      <Card className="amiibo-card">
        <Card.Header className="amiibo-card-header">
          <CustomToggle eventKey="1">
            <Card.Title>
              <h1 className="amiibo-card-title">
                {figure.character}
              </h1>
            </Card.Title>
            <Card.Img 
            className="amiibo-img"
             src={figure.image}
              alt={figure.character} />
            <Card.Text>
              <sub className="amiibo-sub">
                Click for more info
              </sub>
            </Card.Text>
          </CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="amiibo-card">
            <Card.Text>{figure.gameSeries}</Card.Text>
            <Card.Text>{figure.amiiboSeries}</Card.Text>
            <Card.Text>{figure.release.na}</Card.Text>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );


  return (
    <Row>
      <Col xs={1}>
      </Col>
      <Col>
        {listItems}
      </Col>
      <Col xs={1}>
      </Col>
    </Row>
  )
}

export default Display