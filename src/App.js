import React from 'react';
import { Route } from 'react-router-dom';
import ProjectsList from './Projects/ProjectsList';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

function App() {
  return (
    <main className="mainContent">
      <Route
        exact
        path="/"
        component={Home}
      />
      <Route
         exact
        path="/Projects"
        component={ProjectsList}
      />
      <Route
        exact
        path="/AboutMe"
        component={AboutMe}
      />
    </main>
  );
}

export default App;
