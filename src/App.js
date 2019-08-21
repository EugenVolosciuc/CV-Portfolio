import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { MatchMediaHOC } from "react-match-media";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

// Assets
import projectsJSON from "./assets/projects.json";
import socialLinks from "./assets/social.json";

// Components
import Hamburger from "./components/Menu/Hamburger/Hamburger.component";
import Menu from "./components/Menu/Menu.component";

// Pages
import Home from "./Pages/Home/Home.page";
import Websites from "./Pages/Websites/Websites.page";
import WebApps from "./Pages/WebApps/WebApps.page";
import MobileApps from "./Pages/MobileApps/MobileApps.page";

const HamburgerMobile = MatchMediaHOC(Hamburger, "(max-width: 599px)");

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: projectsJSON,
      currentCategory: null,
      social: socialLinks,
      menuIsVisible: false
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState(prevState => ({ menuIsVisible: !prevState.menuIsVisible }));
  }

  render() {
    return (
      <div className="App">
        <HamburgerMobile
          hamburgerClicked={this.state.menuIsVisible}
          clickHamburger={this.handleHamburgerClick}
        />
        <Router>
          <CSSTransition
            in={this.state.menuIsVisible}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Menu key={0} className="fade" />
          </CSSTransition>
          <Switch>
            <Route
              path="/"
              render={() => <Home categories={this.state.categories} />}
              exact
            />
            <Route
              path="/websites"
              render={() => <Websites projects={this.state.categories[0]} />}
            />
            <Route
              path="/web-apps"
              render={() => <WebApps projects={this.state.categories[1]} />}
            />
            <Route
              path="/mobile-apps"
              render={() => <MobileApps projects={this.state.categories[2]} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
