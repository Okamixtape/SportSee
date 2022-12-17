import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Error from "../../components/Error";

export default function ErrorPage () {
    return (
        <div className="sportSee__wrapper">
            <Header />
            <Sidebar />
            <Error />
        </div>
    );
}