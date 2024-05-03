import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../../assets/core-image/logo.svg";
import menu from "../../assets/core-image/menu.png";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sectionOffsets = {};
      let active = false; // Flag to check if any section is active

      // Calculate the offsetTop for each section
      const sections = [
        "home",
        "about",
        "service",
        "resume",
        "project",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          sectionOffsets[section] = {
            top: element.offsetTop,
            height: element.offsetHeight,
          };

          const { top, height } = sectionOffsets[section];
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      if (!active) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={scrolling ? "nav-scroll" : ""}>
        <div className="leftside">
          <Link to="home" spy={true} smooth={true} offset={-10} duration={1000}>
            <img src={logo} alt="my-personal logo" />
          </Link>
        </div>
        <div className="rightside">
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                className={activeSection === "home" ? "active" : ""}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                className={activeSection === "about" ? "active" : ""}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="service"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                className={activeSection === "service" ? "active" : ""}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                className={activeSection === "resume" ? "active" : ""}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="project"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                className={activeSection === "project" ? "active" : ""}
              >
                project
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-60}
                duration={1200}
                className={activeSection === "contact" ? "active" : ""}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="menu-responsive">
            <img
              src={menu}
              alt="menu-icone"
              onClick={() => setOpen((prev) => !prev)}
            />
          </div>
        </div>
      </nav>
      <div className={open ? "menu-lists" : "menu-not-active"}>
        <ul>
          <li>
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1200}
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              onClick={() => setOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              onClick={() => setOpen(false)}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="resume"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              onClick={() => setOpen(false)}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              onClick={() => setOpen(false)}
            >
              Project
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-60}
              duration={1000}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;