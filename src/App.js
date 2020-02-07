import React from 'react';

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
