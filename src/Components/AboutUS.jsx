import React from "react";
import style from "./AboutUs.module.css";
import aboutUsImage from "../images/aboutUsImage.jpg";

const AboutUS = () => {
  return (
    <div id="AboutUs" className={style.body}>
      <p className={style.first_text}>About Us</p>
      <p className={style.second_text}>Our Story</p>
      <div className={style.imageDiv}>
        <img src={aboutUsImage} className={style.image} alt="" />
        <p className={style.text}>
          Our journey began as friends who, despite the twists and turns of life
          keeping us physically apart, remained{" "}
          <span className={style.boldText}>
            {" "}
            connected through the digital world
          </span>
          . This experience brought us to a realization: while we were digitally
          connected, like many others, there was a
          <span className={style.boldText}> real emotional distance</span>.
          Current social platforms seemed to{" "}
          <span className={style.boldText}>
            fall short in nurturing truly meaningful engagements
          </span>
          . Motivated by our experiences and the desire to{" "}
          <span className={style.boldText}>bridge this gap </span>
          for others, we embarked on creating Sparks. Our mission with Sparks is
          to challenge the status quo of social media. We envision a platform
          where{" "}
          <span className={style.boldText}>
            digital connections are not just about sharing moments but about
            fostering genuine interactions
          </span>
          . Leveraging AI-driven features, we're designing Sparks to be a space
          that is both enjoyable and fulfilling, aiming to
          <span className={style.boldText}>
            counteract the digital loneliness
          </span>{" "}
          seen in today's digital society.
        </p>
      </div>
    </div>
  );
};

export default AboutUS;
