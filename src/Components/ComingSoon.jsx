import React, { useState } from "react";
import style from "./ComingSoon.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import Swal from "sweetalert2";
import app from "../images/app.png";
import LogoAndTitle from "../images/LogoAndTitle.png";

const ComingSoon = () => {
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
        "http://13.48.131.120:8001/users/member/",
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
    <div id="ComingSoon" className={style.body}>
      <p className={style.first_text}>Join the Waitlist Now!</p>
      <p className={style.second_text}>Be Part of the Spark</p>
      <div className={style.grid}>
        <img src={app} className={style.image} alt="" />
        <div>
          <p className={style.title1}>Subscribe for Exclusive Access</p>
          <p className={style.description}>
            Be the first to know when our app launches on iOS and Android!
            Subscribe now to receive exclusive updates, sneak peeks, and insider
            news straight to your inbox
          </p>
          <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
          <p className={style.title}>Get Early Access</p>
          <p className={style.description}>
            Want to be among the first to experience our revolutionary app?
            Subscribe today and gain early access privileges, including beta
            testing opportunities and special promotions reserved just for our
            subscribers.
          </p>
          <div style={{ backgroundColor: "#736D6D", height: "1px" }}></div>
          <p className={style.title}>Stay in the Loop</p>
          <p className={style.description}>
            Don't miss out on the excitement! By subscribing, you'll stay in the
            loop with regular progress updates, feature announcements, and
            release dates. Join our community of early adopters and be part of
            shaping the future of our app!
          </p>
        </div>
      </div>
      <div className={style.line}></div>
      <div className={style.secondGrid}>
        <img src={LogoAndTitle} className={style.belowImage} alt="" />
        <div>
          <Form className={style.form} onSubmit={handleSubmit}>
            <Form.Control
              className={style.input}
              size="lg"
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Form.Control
              className={style.input}
              size="lg"
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
    </div>
  );
};

export default ComingSoon;
