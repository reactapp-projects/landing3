import React from "react";
import style from "./HowItWorks.module.css";
import fire from "../images/Fire.png";
import download from "../images/download.png";
import LightOn from "../images/LightOn.png";
import Connect from "../images/Connect.png";

function HowItWorks() {
  return (
    <div>
      <div id="HowItWorks" className={style.workdiv}>
        <p className={style.secondheadertext}>How It Works</p>
        <p className={style.secondmaintext}>Engage | Share | Connect</p>
        <div className={style.gridContainer}>
          <div>
            <img src={download} alt="MyImage" className={style.imagediv} />
            <p className={style.imageundertext}>Download & Invite Friends</p>
            <p className={style.secondimageundertext}>
              Launch your Sparks experience by downloading the app. Invite
              friends to join and start building your community!
            </p>
          </div>
          <div>
            <img src={LightOn} alt="MyImage" className={style.imagediv} />
            <p className={style.imageundertext}>Receive Daily Spark</p>
            <p className={style.secondimageundertext}>
              Begin with a daily spark - a thought-provoking prompt tailored to
              pique your interest and spark deep conversations.
            </p>
          </div>
          <div>
            <img src={fire} alt="MyImage" className={style.imagediv} />
            <p className={style.imageundertext}>Share your Flame</p>
            <p className={style.secondimageundertext}>
              Respond to the spark with your ideas, stories, or opinions through
              text, video, or voice messages. Share your unique perspective and
              light up the community feed.
            </p>
          </div>
          <div>
            <img src={Connect} alt="MyImage" className={style.imagediv} />
            <p className={style.imageundertext}>Connect & Grow</p>
            <p className={style.secondimageundertext}>
              Dive into the community feed, interact with compelling responses,
              and forge meaningful connections that grow stronger with every
              shared spark.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
