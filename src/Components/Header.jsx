import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import style from "./Header.module.css";
import logo1 from "../images/logo1.png";
import community from "../images/community.png";
import bonding from "../images/bonding.png";
import Groupimg from "../images/Groupimg.png";
import rocket from "../images/rocket.png";
import sparkle from "../images/sparkle.png";
import Dropdown from "react-bootstrap/Dropdown";

function Header() {
  const [formData, setFormData] = useState({
    fullName: "",
    emailAddress: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Full Name:", formData.fullName);
    console.log("Email Address:", formData.emailAddress);
    try {
      const { data } = await axios.post(
        "http://3.94.180.35:8001/users/member/",
        JSON.stringify({
          full_name: formData.fullName,
          email: formData.emailAddress,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${data.full_name} Successfully signed up!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to sign up.\nEmail has problem.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  return (
    <div className={style.body}>
      <div className={style.flexHeader}>
        <img
          src={logo1}
          alt="My Image"
          style={{ width: "35px", height: "35px", marginLeft: "20px" }}
        />
        <nav className={style.navbar}>
          <ul className={style.navbarList}>
            <li>
              <a href="#">How it works</a>
            </li>
            <li>
              <a href="#">Feature highlights</a>
            </li>
            <li>
              <a href="#">Join Now</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
        <Dropdown className={style.mobilenav}>
          <Dropdown.Toggle
            id="dropdown-basic"
            className={style.hamburgermenu}
            toggle={false}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 50 50"
              style={{ fill: "white" }}
            >
              <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
            </svg>
          </Dropdown.Toggle>

          <Dropdown.Menu className={style.linkList}>
            <Dropdown.Item href="#HowItWorks" className={style.link}>
              How it works
            </Dropdown.Item>
            <Dropdown.Item href="#Features" className={style.link}>
              Features
            </Dropdown.Item>
            <Dropdown.Item href="#JoinNow" className={style.link}>
              Join Now
            </Dropdown.Item>
            <Dropdown.Item href="#Aboutus" className={style.link}>
              About us
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={style.headermain}>
        <div className={style.textheader}>
          <p className={style.headertextmain}>Sparks</p>
          <p className={style.headertextmedium}>Where conversations Ignite</p>
          <p className={style.headertextsmall}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          <div className={style.formdivDesktop}>
            <Form className={style.form} onSubmit={handleSubmit}>
              <Form.Control
                className={style.input}
                size="sm"
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleInputChange}
              />
              <Form.Control
                className={style.input}
                size="sm"
                type="text"
                name="emailAddress"
                placeholder="Email Address *"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
              <Button variant="primary" type="submit" className={style.button}>
                Subscribe for Early Access!
              </Button>
            </Form>
          </div>
        </div>
        <div className={style.formdivMobile}>
          <Form className={style.form} onSubmit={handleSubmit}>
            <Form.Control
              className={style.input}
              size="sm"
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Form.Control
              className={style.input}
              size="sm"
              type="text"
              name="emailAddress"
              placeholder="Email Address *"
              value={formData.emailAddress}
              onChange={handleInputChange}
            />
            <Button variant="primary" type="submit" className={style.button}>
              Subscribe for Early Access!
            </Button>
          </Form>
        </div>
        <div className={style.headerimage}>
          <div className={style.imagediv}>
            <img
              src={sparkle}
              alt="My Image"
              style={{ width: "90px", height: "90px" }}
            />
            <p className={style.imageundertext}>Daily Sparks of Interactions</p>
          </div>
          <div className={style.imagediv}>
            <img
              src={bonding}
              alt="My Image"
              style={{ width: "90px", height: "90px" }}
            />
            <p className={style.imageundertext}>
              Authentic Bonds Beyond Surface level
            </p>
          </div>
          <div>
            <img
              src={Groupimg}
              alt="My Image"
              style={{ width: "140px", height: "140px" }}
            />
          </div>
          <div className={style.imagediv}>
            <img
              src={rocket}
              alt="My Image"
              style={{ width: "90px", height: "90px" }}
            />
            <p className={style.imageundertext}>
              Platform of Shared Experiences
            </p>
          </div>
          <div className={style.imagediv}>
            <img
              src={community}
              alt="My Image"
              style={{ width: "90px", height: "90px" }}
            />
            <p className={style.imageundertext}>Community and Friendship</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
