import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Container from "../Components/Container";

const HomeLayout = () => {
  return (
    <>
      <Container>
        <header>
          <Navbar></Navbar>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </Container>
    </>
  );
};

export default HomeLayout;
