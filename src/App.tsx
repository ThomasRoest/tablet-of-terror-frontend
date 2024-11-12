import { Route, Switch } from "wouter";
import { Layout } from "./components/Layout";
import { FloorPlanPage } from "./pages/Floorplan";
import { HomePage } from "./pages/Home";
import { OrganisatiePage } from "./pages/Organisatie";
import { RuimtesPage } from "./pages/Ruimtes";

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/ruimtes" component={RuimtesPage} />
        <Route path="/plattegrond" component={FloorPlanPage} />
        <Route path="/organisatie" component={OrganisatiePage} />
        <Route path="/" component={HomePage} />
        <Route>404: No such page!</Route>
      </Switch>
    </Layout>
  );
};

export default App;
