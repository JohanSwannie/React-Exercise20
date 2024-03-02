import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, InputGroup, Table } from "react-bootstrap";
import { data } from "./inputData.js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container>
        <h1 className="text-center text-3xl mt-2 mb-8 h-5">
          List of Family Members and Friends
        </h1>
        <Form>
          <InputGroup>
            <Form.Control
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for people"
              className="placeholder-gray-950 placeholder-opacity-35"
            />
          </InputGroup>
        </Form>
      </Container>
    </div>
  );
}

export default App;
