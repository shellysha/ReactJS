import { Form, Button, Container } from "react-bootstrap";
import CreateCardHelper from "../../Helpers/CreateCardHelper";
import { toast } from "react-toastify";
const notify = (message) => toast(message);
function CreateCardComp({ clickHandler }) {
  return (
    <Container className="mt-3 col-lg-8 col-md-10">
      <Form>
        <div>
          <h1> Create a Business Card</h1>
        </div>
        <Form.Group className="mb-3" controlId="formBasicBusinessName">
          <Form.Label>Business Name</Form.Label>
          <Form.Control
            className="text-capitalize"
            type="text"
            maxLength="35"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBusinessDescription">
          <Form.Label>Business Description</Form.Label>
          <Form.Control type="text" maxLength="90" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBusinessAddress">
          <Form.Label>Business Address</Form.Label>
          <Form.Control
            className="text-capitalize"
            type="text"
            maxLength="30"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicBusinessPhone">
          <Form.Label>Business Phone</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Button
          variant="success"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            var validateCard = CreateCardHelper(
              "formBasicBusinessName",
              "formBasicBusinessDescription",
              "formBasicBusinessAddress",
              "formBasicBusinessPhone"
            );
            if (typeof validateCard == "string") {
              notify(validateCard);
            } else {
              clickHandler(validateCard);
            }
          }}
        >
          Create Card
        </Button>
      </Form>
    </Container>
  );
}
export default CreateCardComp;
