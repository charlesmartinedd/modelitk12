import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PageBase from "./PageBase";
import Page404 from "./pages/Page404";
import PageHome from "./pages/PageHome";
import PagePricingRedirect from "./pages/PagePricingRedirect";
import PageLearningHub from "./pages/PageLearningHub";
import PageRequestDemo from "./pages/PageRequestDemo";
import PageTeachersPayTeachers from "./pages/PageTeachersPayTeachers";

export default function App() {
  return (
    <Router hashType="slash">
      <Switch>
        <Route exact path="/">
          <PageBase options={{header: true}}><PageHome/></PageBase>
        </Route>
        <Route path="/pricing">
					<PageBase options={{header: true}}><PagePricingRedirect/></PageBase>
        </Route>
				<Route path="/learning-hub">
					<PageBase options={{header: true}}><PageLearningHub/></PageBase>
        </Route>
				<Route path="/teachers-pay-teachers">
					<PageBase options={{header: true}}><PageTeachersPayTeachers/></PageBase>
        </Route>
				<Route path="/request-demo">
					<PageBase options={{header: true}}><PageRequestDemo/></PageBase>
        </Route>
				<Route path="*">
					<PageBase options={{header: true}}>
						<Page404/>
					</PageBase>
        </Route>
      </Switch>
    </Router>
  );
}