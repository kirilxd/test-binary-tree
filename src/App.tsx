import React from "react";
import { TreeGraph } from "./components/TreeGraph";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { options } from "./config";

function App() {
  return (
    <>
      <Container fluid className={"h-100"}>
        <Row className={"mt-2 mb-1"}>
          <TreeGraph options={options} />
        </Row>
      </Container>
    </>
  );
}

export default App;
