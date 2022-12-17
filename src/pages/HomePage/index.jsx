import React from "react";
import Header from "../../components/Header";
import UserInfos from "../../components/UserInfos";
import Sidebar from "../../components/Sidebar";

export default function HomePage () {
  return (
    <div className="sportSee__wrapper">
      <Header />
      <UserInfos />
      <Sidebar />
    </div>
  );
}
