import React, { Component } from "react";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import routes from "./routes.jsx";
class App extends Component {
  render() {
    return (
      // TODA A APLICAÇÃO É RENDERIZADA DENTRO DO ROUTER.
      <div className="App">
        <Router>
          <Sidebar />
          <div className="pagina-inicial">
            <div className="main">
              <div className="content">
                {routes.map((route, index) => (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ))}
              </div>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
