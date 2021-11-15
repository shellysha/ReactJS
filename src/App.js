import { ToastContainer } from "react-toastify";
import SinglePageAppComp from "./components/Navigation/SinglePageAppComp";
import { useState, useEffect } from "react";
import { getMeData } from "./Helpers/Fetch";
import Footer from "./pages/FooterPage";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  //usestate is a special variable to use in react
  const [CurrntUser, setCurrntUser] = useState({});

  useEffect(() => {
    getMeData(localStorage.getItem("token"), (data) => {
      setCurrntUser(data);
    });
  }, []);

  return (
    <>
      <div className="App">
        {CurrntUser && CurrntUser.id}
        <SinglePageAppComp
          set={setCurrntUser}
          user={CurrntUser}
        ></SinglePageAppComp>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
      </div>
    </>
  );
}

export default App;
