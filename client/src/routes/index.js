import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Loading from '../components/Loading';

const Footer = lazy(() => import('../components/Footer'));
const Header = lazy(() => import('../components/Header'));
const Newsletter = lazy(() => import('../components/Newsletter'));

const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/Not Found'));
const Films = lazy(() => import('../pages/Films'));
const FilmsDetails = lazy(() => import('../pages/Films/Details/filmsDetails'));
const Vehicles = lazy(() => import('../pages/Vehicles'));
const VehiclesDetails = lazy(() =>
  import('../pages/Vehicles/Details/vehiclesDetails'),
);
const Planets = lazy(() => import('../pages/Planets'));
const PlanetsDetails = lazy(() =>
  import('../pages/Planets/Details/planetDetails'),
);
const Characters = lazy(() => import('../pages/Characters'));
const CharacterDetails = lazy(() =>
  import('../pages/Characters/Details/charactersDetails'),
);
const Species = lazy(() => import('../pages/Species'));
const SpeciesDetails = lazy(() =>
  import('../pages/Species/Details/speciesDetails'),
);
const Starships = lazy(() => import('../pages/Starships'));
const StarshipsDetails = lazy(() =>
  import('../pages/Starships/Details/starshipsDetails'),
);

export const Routes = () => (
  <Suspense fallback={<Loading />}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/characters">
          <Characters />
        </Route>
        <Route path="/characters/:name">
          <CharacterDetails />
        </Route>
        <Route exact path="/planets">
          <Planets />
        </Route>
        <Route path="/planets/:name">
          <PlanetsDetails />
        </Route>
        <Route exact path="/films">
          <Films />
        </Route>
        <Route path="/films/:title">
          <FilmsDetails />
        </Route>
        <Route exact path="/species">
          <Species />
        </Route>
        <Route path="/species/:name">
          <SpeciesDetails />
        </Route>
        <Route exact path="/vehicles">
          <Vehicles />
        </Route>
        <Route path="/vehicles/:name">
          <VehiclesDetails />
        </Route>
        <Route exact path="/starships">
          <Starships />
        </Route>
        <Route path="/starships/:name">
          <StarshipsDetails />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Newsletter />
      <Footer />
    </Router>
  </Suspense>
);
