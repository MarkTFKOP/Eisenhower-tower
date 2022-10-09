import { Button, Card } from "react-bootstrap";
import "./CSS/Card.css";
function BasicExample(props) {
  const cardBodyStyle = {
    width: "18rem",
    cursor: "Pointer",
    background: `${props.styleBodyColor}`,
  };
  return (
    <Card style={cardBodyStyle} className="CardBody">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
