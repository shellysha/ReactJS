import { Form, Button, Container } from "react-bootstrap";
import ValidateSimpleRegistration from "../../Helpers/ValidateSimpleRegistration";
import { toast } from "react-toastify";
const notify = (message) => toast(message);

function SimpleRegistrationComp({ text, btn, clickHandler }) {
  return (
    <Container className="mt-3 col-lg-6 col-md-10">
      <Form noValidate>
        <h1>{text}</h1>
        <h5>You can open new account for free!</h5>

        <Form.Group className="mb-3" controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Full name"
            // defaultValue=""
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            // defaultValue=""
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Create a Password"
            // defaultValue="123456"
          />
        </Form.Group>

        <Button
          variant="dark"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            var validatioErrorOrData = ValidateSimpleRegistration(
              "formBasicFullName",
              "formBasicEmail",
              "formBasicPassword"
            );
            if (typeof validatioErrorOrData == "string") {
              notify(validatioErrorOrData);
            } else {
              clickHandler(validatioErrorOrData);
            }
          }}
        >
          {btn}
        </Button>
      </Form>
    </Container>
  );
}
export default SimpleRegistrationComp;
