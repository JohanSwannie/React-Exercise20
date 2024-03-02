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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Age</th>
              <th>Career</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLocaleLowerCase() === ""
                  ? item
                  : item.fullname.toLocaleLowerCase().includes(search);
              })
              .sort((a, b) => (a.fullname > b.fullname ? 1 : -1))
              .map((item, idx) => (
                <tr key={idx}>
                  <td>{item.fullname}</td>
                  <td>{item.age}</td>
                  <td>{item.career}</td>
                  <td>{item.salary}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
