import React from 'react';
import Route from 'react-router-dom';
import ProjectList from './Projects/ProjectList';
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
        component={ProjectList}
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
