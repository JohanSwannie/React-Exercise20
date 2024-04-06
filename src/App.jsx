import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, InputGroup, Table, Button } from "react-bootstrap";
import { data } from "./inputData.js";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Container>
        <h3 className="text-center text-2xl mt-2 h-8">
          List of Family Members and Friends
        </h3>
        <Form>
          <InputGroup className="my-2">
            <Form.Control
              type="search"
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search for people"
              className="placeholder-gray-950 placeholder-opacity-35 p-3"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover className="border-2 border-slate-300">
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
              .filter((item) =>
                search.toLocaleLowerCase() === ""
                  ? item
                  : item.fullname.toLocaleLowerCase().includes(search)
              )
              .sort((a, b) => (a.fullname > b.fullname ? 1 : -1))
              .map((item, idx) => (
                <tr key={idx}>
                  <td>{item.fullname}</td>
                  <td>{item.age}</td>
                  <td>{item.career}</td>
                  <td>${item.salary}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;
