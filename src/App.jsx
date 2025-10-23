import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import PageBase from "./PageBase";
import Page404 from "./pages/Page404";
import PageLanding from "./pages/PageLanding";
import PageHome from "./pages/PageHome";
import PagePricingRedirect from "./pages/PagePricingRedirect";
import PageLearningHub from "./pages/PageLearningHub";
import PageRequestDemo from "./pages/PageRequestDemo";
import PageTeachersPayTeachers from "./pages/PageTeachersPayTeachers";
import PagePublications from "./pages/PagePublications";

export default function App() {
  return (
    <Router hashType="slash">
      <Switch>
        <Route exact path="/">
          <PageBase options={{header: true}}><PageHome/></PageBase>
        </Route>
        <Route path="/coming-soon">
          <PageBase options={{header: true}}><PageLanding/></PageBase>
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
				<Route path="/publications">
					<PageBase options={{header: true}}><PagePublications/></PageBase>
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