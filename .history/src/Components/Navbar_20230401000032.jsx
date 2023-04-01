// import React from "react";
import { Link } from "react-scroll";
// import Button from "react-bootstrap/Button";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="flex justify-between p-10  text-xl px-5 h-10 items-center sticky z-40	top-0 bg-red-200 border-b-white border-2">
      <div className="flex gap-10 items-center">
        <h1 className="font-Parisienne">Made by Yash</h1>
      </div>
      <div className="md:contents hidden">
        <ul className="flex gap-10">
          <li className="cursor-pointer	">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-50}
            >
              Home
            </Link>{" "}
          </li>
          <li className="cursor-pointer	">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              offset={-60}
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer	">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Projects
            </Link>
          </li>

          <button className="bg-gradient-to-br from-orange-500 via-red-400 to-pink-500  text-white outline-red-400 py-1 w-32 px-3 rounded-xl border-none">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
            >
              Contact
            </Link>
          </button>
        </ul>
      </div>
      <div className="md:hidden">
        <Button
          onClick={handleShow}
          className="bg-gradient-to-br from-orange-500 via-red-400 to-pink-500  text-white outline-red-400 py-1 w-32 px-3 rounded-xl border-none"
        >
          Menu
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="bg-black text-white p-10">
            <ul className="flex flex-col gap-10">
              <li className="cursor-pointer	">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  Home
                </Link>{" "}
              </li>
              <li className="cursor-pointer	">
                <Link
                  to="services"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
                >
                  Services
                </Link>
              </li>
              <li className="cursor-pointer	">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Projects
                </Link>
              </li>

              <button className="bg-gradient-to-br from-orange-500 via-red-400 to-pink-500  text-white outline-red-400 py-1 w-32 px-3 rounded-xl border-none">
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-70}
                >
                  Contact
                </Link>
              </button>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
};

export default Navbar;
