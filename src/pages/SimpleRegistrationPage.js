//pages should contain the same named component
//from this page we sent the registration to the server

import { Container } from "react-bootstrap";
import SimpleRegistrationComp from "../components/Simple-registration/SimpleRegistrationComp";
import { registerNewAccount, signInUser } from "../Helpers/Fetch";
import { toast } from "react-toastify";

function SimpleRegistrationPage({}) {
  return (
    // <> this is react fragment for a component to return multiple elements</>
    <Container>
      <SimpleRegistrationComp
        text="Create an Account"
        clickHandler={registerUser}
        btn="Sign Me Up!"
      ></SimpleRegistrationComp>
    </Container>
  );

  function registerUser(data) {
    registerNewAccount(data, (data1) => {
      if (data1._id) {
        toast("YaY! You're In! ");
        delete data.name;
        signInUser(data, (response) => {
          if (response.token) {
            localStorage.setItem("token", response.token);
          }
          window.location.href = "http://localhost:3001/my-cards";
        });
      } else {
        toast("Something's Wrong, Please Try Again ");
      }
    });
  }
}
export default SimpleRegistrationPage;
