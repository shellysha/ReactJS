import validateSignIn from "../../Helpers/SignInHelper";
import { Form, Button, Container } from "react-bootstrap";
import { toast } from "react-toastify";
function SignInComp({ clickHandler }) {
  return (
    <Container className="mt-3 col-lg-6 col-md-10">
      <Form>
        <h2>Sign In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email adress"
            defaultValue="shelly@gmail.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            defaultValue="123456"
          />
        </Form.Group>
        <Button
          variant="light"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            var errorOrData = validateSignIn(
              "formBasicEmail",
              "formBasicPassword"
            );
            if (typeof errorOrData == "string") {
              toast(errorOrData);
            } else {
              clickHandler({
                email: document.getElementById("formBasicEmail").value,
                password: document.getElementById("formBasicPassword").value,
              });
            }
          }}
        >
          Sign in
        </Button>
      </Form>
    </Container>
  );
}
export default SignInComp;
