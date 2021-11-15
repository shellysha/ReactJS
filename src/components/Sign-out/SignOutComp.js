import { Button } from "react-bootstrap";
import { BiLogOut } from "react-icons/bi";

function SignOutUser() {
  return (
    <>
      <Button
        variant="dark"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "http://localhost:3001/sign-in";
        }}
      >
        Log Out
        <BiLogOut class="logOutIcon"></BiLogOut>
      </Button>
    </>
  );
}

export default SignOutUser;
