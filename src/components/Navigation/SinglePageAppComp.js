//Child of App.js
//Father of children: NavigationBarComp && NavigationRouteComp

import NavigationBarComp from "./NavigationBarComp"; //Calling the son component
import NavigationRouteComp from "./NavigationRouteComp"; //Calling the son component
import { BrowserRouter as Router } from "react-router-dom";
//We have to include router that covers both navigation and switch as well
//so the import will be at the father's component to bring it to all childern

function SinglePageAppComp({ set, user }) {
  return (
    <div>
      <Router>
        <NavigationBarComp user={user}></NavigationBarComp>
        <NavigationRouteComp set={set} user={user}></NavigationRouteComp>
      </Router>
    </div>
  );
}
export default SinglePageAppComp;
