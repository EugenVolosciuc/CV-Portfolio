import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import "./App.css";

// Assets
import projectsJSON from "./assets/projects.json";
import socialLinks from "./assets/social.json";

// Components
import Menu from "./components/Navbar/Menu/Menu.component";
import Navbar from "./components/Navbar/Navbar.component";

// Pages
import Home from "./pages/Home/Home.page";
import Category from "./pages/Category/Category.page";

library.add(faArrowLeft);

class App extends Component {
  constructor() {
    super();
    this.state = {
      social: socialLinks,
      menuIsVisible: false,
      showBackButton: window.location.pathname !== '/'
    };
    this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }

  handleHamburgerClick() {
    this.setState(prevState => ({ menuIsVisible: !prevState.menuIsVisible }));
  }

  // FIX BACK BUTTON
  handleCategoryClick() {
    this.setState(prevState => (
      {
        showBackButton: !prevState.showBackButton && window.location.pathname !== '/',
        menuIsVisible: false
      }
    ));
  }

  handleBackButtonClick() {
    this.setState(prevState => ({ showBackButton: !prevState.showBackButton }));
  }

  render() {
    const categoryPages = Object.entries(projectsJSON).map(
      (category, index) => {
        return (
          <Route
            key={index}
            exact
            path={`/${category[0]}`.split(" ").join("-")}
            render={() => <Category category={category} />}
          />
        );
      }
    );

    return (
      <div className="App">
        <Router>
          <Navbar
            hamburgerClicked={this.state.menuIsVisible}
            hamburgerClick={this.handleHamburgerClick}
            handleBackButtonClick={this.handleBackButtonClick}
            showBackButton={this.state.showBackButton}
          />
          <CSSTransition
            in={this.state.menuIsVisible}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <Menu key={0} className="fade" categories={projectsJSON} handleCategoryClick={this.handleCategoryClick} />
          </CSSTransition>
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home handleCategoryClick={this.handleCategoryClick} categories={projectsJSON} />}
            />
            {categoryPages}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
