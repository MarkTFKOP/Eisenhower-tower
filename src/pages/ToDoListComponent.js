import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
export default function ToDoListComponent() {
  return (
    <div>
      <div className="ToDoListComponent-Head"></div>
      <div className="ToDoListComponent-Body">
        {" "}
        <ListGroup as="ul">
          <ListGroup.Item as="li" active>
            Cras justo odio
          </ListGroup.Item>
          <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item as="li" disabled>
            Morbi leo risus
          </ListGroup.Item>
          <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
