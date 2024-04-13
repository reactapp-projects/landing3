import React from "react";
import style from "./HowItWorks.module.css";
import fire from "../images/Fire.png";

function HowItWorks() {
  return (
    <div>
      <div className={style.workdiv}>
        <p className={style.secondheadertext}>How It Works</p>
        <p className={style.secondmaintext}>Engage | Share | Connect</p>
        <div className={style.gridContainer}>
          <div>
            <img src={fire} alt="My Image" className={style.imagediv} />
            <p className={style.imageundertext}>Share your Flame</p>
            <p className={style.secondimageundertext}>
              Respond to the spark with your ideas, stories, or opinions through
              text, video, or voice messages. Share your unique perspective and
              light up the community feed.
            </p>
          </div>
          <div>
            <img src={fire} alt="My Image" className={style.imagediv} />
            <p className={style.imageundertext}>Share your Flame</p>
            <p className={style.secondimageundertext}>
              Respond to the spark with your ideas, stories, or opinions through
              text, video, or voice messages. Share your unique perspective and
              light up the community feed.
            </p>
          </div>
          <div>
            <img src={fire} alt="My Image" className={style.imagediv} />
            <p className={style.imageundertext}>Share your Flame</p>
            <p className={style.secondimageundertext}>
              Respond to the spark with your ideas, stories, or opinions through
              text, video, or voice messages. Share your unique perspective and
              light up the community feed.
            </p>
          </div>
          <div>
            <img src={fire} alt="My Image" className={style.imagediv} />
            <p className={style.imageundertext}>Share your Flame</p>
            <p className={style.secondimageundertext}>
              Respond to the spark with your ideas, stories, or opinions through
              text, video, or voice messages. Share your unique perspective and
              light up the community feed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
