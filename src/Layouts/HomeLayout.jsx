import React from "react";
import { Outlet } from "react-router";
import Footer from "../Components/Shared/Footer";
import Navbar from "../Components/Shared/Navbar";
import Container from "../Components/Container";

const HomeLayout = () => {
  return (
    <>
      <div className="bg-[#EAECED] p-2 sm:p-6">
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
      </div>
    </>
  );
};

export default HomeLayout;
