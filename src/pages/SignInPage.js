import { signInUser } from "../Helpers/Fetch";
import { Container } from "react-bootstrap";
import SignInComp from "../components/Sign-in/SignInComp";
import { toast } from "react-toastify";
import { getMeData } from "../Helpers/Fetch";

function SignInPage({ set }) {
  return (
    <Container>
      <SignInComp clickHandler={signIn}></SignInComp>
    </Container>
  );

  function signIn(data) {
    signInUser(data, (response) => {
      if (response.token) {
        toast("Welcome Back!");
        localStorage.setItem("token", response.token);
        getMeData(response.token, (data) => {
          set(data);
          window.location.href = "http://localhost:3001/my-cards";
        });
      } else {
        toast("Failed to log in");
      }
    });
  }
}
export default SignInPage;
