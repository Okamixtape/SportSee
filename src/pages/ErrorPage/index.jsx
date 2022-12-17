import React, { Component } from "react";
import Header from "../../components/Header";
import Error from "../../components/Error";

export class ErrorPage extends Component {
    render() {
        return (
            <div className="sportSee__wrapper -paddingBottom">
                <Header />
                <Error />
            </div>
        );
    }
}

export default ErrorPage;