import {
  registerNewAccount,
  signInUser,
  insertNewCard,
} from "../Helpers/Fetch";
import { toast } from "react-toastify";
import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/Simple-registration/SimpleRegistrationComp";
import CreateCardComp from "../components/My-cards/CreateCardComp";
import { useState } from "react";
function BusinessRegistrationPage({ clickHandler }) {
  const [isStep1, setIsStep1] = useState(true);

  return (
    <Container>
      {isStep1 && (
        <SimpleRegistrationComp
          text="Business Registration"
          clickHandler={registerUser}
          btn="Register"
        ></SimpleRegistrationComp>
      )}
      {!isStep1 && <CreateCardComp clickHandler={CreateCard}></CreateCardComp>}
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (data1) => {
      if (data1._id) {
        toast("You have registered successfully");
        delete data.name;
        signInUser(data, (response) => {
          if (response.token) {
            localStorage.setItem("token", response.token);
          }
        });

        setIsStep1(false);
      } else {
        toast("Eror Acount was not created, try again");
      }
    });
  }
  function CreateCard(data) {
    insertNewCard(data, localStorage.getItem("token"), () => {
      toast("Your card have been created!");
    });
    window.location.href = "http://localhost:3001/my-cards";
  }
}
export default BusinessRegistrationPage;
