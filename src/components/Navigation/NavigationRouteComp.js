//Child of SinglePageAppComp
//Logic that inevstigates the browser's URL and renders the wanted page
import { Switch, Route } from "react-router-dom";
import { tabs } from "../../Helpers/Tabs";
function NavigationRouteComp({ set, user }) {
  return (
    <Switch>
      {tabs.map((tab, index) => (
        <Route key={index} path={tab.href}>
          {<tab.page set={set} user={user}></tab.page>}
        </Route>
      ))}
    </Switch>
  );
}

export default NavigationRouteComp;
