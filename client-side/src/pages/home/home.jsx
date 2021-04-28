import React from "react";
import "./home.scss";
import NavBar from "../../components/navbar/navbar";
import SideBar from "../../components/sidebar/sidebar";
import EmailList from "../emailList/emailList";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <div className="column-wrapper">
        <SideBar />
        <EmailList />
      </div>
    </div>
  );
};
export default Home;
