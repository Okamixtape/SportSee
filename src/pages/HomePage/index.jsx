import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export class HomePage extends Component {
  render() {
    return (
      <div className="sportSee__wrapper">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default HomePage;