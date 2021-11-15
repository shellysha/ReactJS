//Here is where we create the logic behind each navigation link
//Importing each page to navigate
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SimpleRegistrationPage from "../pages/SimpleRegistrationPage";
import BusinessRegistrationPage from "../pages/BusinessRegistrationPage";
import MyCardsPage from "../pages/MyCardsPage";
import SignInPage from "../pages/SignInPage";
import { BiHome, BiInfoCircle } from "react-icons/bi";
export const tabs = [
  {
    name: "Home",
    href: "/home",
    page: HomePage,
    displayForLoggedin: true,
    icon: <BiHome></BiHome>,
  },
  {
    name: "About",
    href: "/about",
    page: AboutPage,
    displayForLoggedin: true,
    icon: <BiInfoCircle></BiInfoCircle>,
  },
  {
    name: "Simple Registration",
    href: "/simple-registration",
    page: SimpleRegistrationPage,
    displayForLoggedin: false,
    // icon:<></>
  },
  {
    name: "Business Registration",
    href: "/business-registration",
    page: BusinessRegistrationPage,
    displayForLoggedin: false,
    // icon:<></>
  },
  {
    name: "My Cards",
    href: "/my-cards",
    page: MyCardsPage,
    displayForLoggedin: true,
    hideForLoggedOut: true,
    // icon:<></>
  },

  {
    name: "Sign In",
    href: "/sign-in",
    page: SignInPage,
    displayForLoggedin: false,
    // icon:<></>
  },
];
