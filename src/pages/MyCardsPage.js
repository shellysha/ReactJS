import { insertNewCard } from "../Helpers/Fetch";
import { Container, Button, Row, Col } from "react-bootstrap";
import CardsComp from "../components/My-cards/CardsComp";
import CreateCardComp from "../components/My-cards/CreateCardComp";
import { useState } from "react";
function MyCardsPage() {
  const [isAddMode, setAddMode] = useState(false);

  return (
    <>
      <Container>
        <Row className="justify-content-md-center mt-3">
          <Col md="auto">
            <Button
              variant="outline-light"
              onClick={() => {
                setAddMode(true);
              }}
            >
              Create New Card
            </Button>
          </Col>
        </Row>

        <div>
          {!isAddMode && <CardsComp></CardsComp>}
          {isAddMode && (
            <CreateCardComp clickHandler={insertCard}></CreateCardComp>
          )}
        </div>
      </Container>
    </>
  );

  function insertCard(data) {
    insertNewCard(data, localStorage.getItem("token"), () => {
      setAddMode(false);
    });
  }
}
export default MyCardsPage;
