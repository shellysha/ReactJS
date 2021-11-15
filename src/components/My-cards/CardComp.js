import { toast } from "react-toastify";
import { Card, Button } from "react-bootstrap";
import { CgTrash } from "react-icons/cg";

function CardComp({ card, handleClick }) {
  return (
    (card && (
      <Card
        style={{
          width: "18rem",
          display: "inline-block",
          margin: 10,
          marginTop: 30,
        }}
      >
        <Card.Img
          className="card-img-top mx-auto d-block"
          style={{ width: 100, marginTop: 15 }}
          src={card.bizImage}
        />
        <Card.Body>
          <Card.Title
            className="text-capitalize"
            style={{ fontWeight: "bold", fontSize: 24 }}
          >
            {card.bizName}
          </Card.Title>
          <Card.Text className="text-capitalize">
            {card.bizDescription}
          </Card.Text>
          <Card.Text className="text-capitalize">{card.bizAddress}</Card.Text>
          <Card.Text className="text-capitalize">
            <b>Phone: </b>
            {card.bizPhone}
          </Card.Text>
          <Button
            style={{
              fontSize: 25,
              color: "#264237",
              backgroundColor: "none",
              padding: 4,
            }}
            variant="link"
            onClick={(e) => {
              e.preventDefault();
              toast("The card has been removed!");
              handleClick(card._id);
            }}
          >
            <CgTrash class="removeCardIcon"></CgTrash>
          </Button>
        </Card.Body>
      </Card>
    )) || <></>
  );
}
export default CardComp;
