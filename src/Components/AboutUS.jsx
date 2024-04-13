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
      <div className={style.line}></div>
      <p className={style.second_text1}>Our Growing Team of Partners</p>
      <div className={style.sponsers}>
        <div></div>
        <div></div>
        <div className={style.icon}>
          <svg
            width="4vw"
            height="6vh"
            viewBox="0 0 148 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.1789 46.3108C33.7852 47.808 44.2607 49.6021 44.2607 61.3863C44.2607 71.6604 36.081 77.8558 22.1304 77.8558C8.17971 77.8558 0 71.4668 0 60.5344H11.9057C11.9057 66.1361 15.7321 69.4275 22.0927 69.4275C28.3028 69.4275 31.9034 67.0784 31.9034 62.8835C31.9034 57.5916 26.17 56.5978 19.7718 55.5007C11.3286 54.0938 1.22947 52.4029 1.22947 40.9156C1.22947 31.4418 9.12062 25.7497 22.1304 25.7497C35.1276 25.7497 42.9058 31.8419 42.9058 42.2192H31.0126C31.0126 36.9273 27.8135 33.9458 22.168 33.9458C16.8361 33.9458 13.637 36.14 13.637 39.8314C13.637 44.3102 18.9313 45.2137 25.1413 46.3108M69.2641 72.0605L80.4045 26.7565H94.1419L79.9403 76.8491H58.4498L44.2607 26.7565H57.9856L69.1261 72.0605H69.2641ZM126.647 25.8917C140.247 25.8917 148 36.3207 148 51.9512C148 67.2978 139.645 78.1785 126.647 77.9978C125.042 77.9978 123.448 77.7655 121.905 77.3137C120.362 76.862 118.894 76.1908 117.539 75.3131C116.172 74.4483 114.942 73.377 113.864 72.1509C112.797 70.9247 111.894 69.5565 111.204 68.0722H111.053L106.324 76.8491H98.1565V0H110.966V36.3078H111.116C111.718 34.746 112.559 33.2746 113.588 31.9581C114.629 30.6415 115.858 29.5057 117.238 28.5764C118.606 27.6471 120.111 26.9501 121.692 26.4854C123.285 26.0337 124.916 25.8272 126.572 25.8788L126.647 25.8917ZM134.815 51.9899C134.815 44.0778 131.816 36.3207 122.482 36.3207C116.222 36.3207 112.546 40.438 111.016 45.73C110.865 46.2376 110.736 46.7496 110.627 47.2659C110.518 47.7822 110.43 48.3028 110.363 48.8277C110.288 49.3526 110.234 49.8774 110.2 50.4023C110.167 50.9272 110.15 51.4564 110.15 51.9899C110.15 52.532 110.167 53.0741 110.2 53.6162C110.234 54.1583 110.284 54.6961 110.351 55.2296C110.426 55.7717 110.518 56.3052 110.627 56.8301C110.736 57.3636 110.865 57.8885 111.016 58.4048C112.672 64.071 116.699 67.543 122.482 67.543C130.7 67.543 134.815 61.1798 134.815 51.9899Z"
              fill="#003149"
            />
          </svg>
          <svg
            width="2vw"
            height="6vh"
            viewBox="0 0 43 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.flash}
          >
            <path
              d="M10.1935 0L43 40L10.1935 80L0 73.7734L19.2994 40L0 6.22665L10.1935 0Z"
              fill="#00C0FF"
            />
          </svg>
        </div>
        <div className={style.icon1}>
          <svg
            width="80%"
            height="6vh"
            viewBox="0 0 148 78"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M25.1789 46.3108C33.7852 47.808 44.2607 49.6021 44.2607 61.3863C44.2607 71.6604 36.081 77.8558 22.1304 77.8558C8.17971 77.8558 0 71.4668 0 60.5344H11.9057C11.9057 66.1361 15.7321 69.4275 22.0927 69.4275C28.3028 69.4275 31.9034 67.0784 31.9034 62.8835C31.9034 57.5916 26.17 56.5978 19.7718 55.5007C11.3286 54.0938 1.22947 52.4029 1.22947 40.9156C1.22947 31.4418 9.12062 25.7497 22.1304 25.7497C35.1276 25.7497 42.9058 31.8419 42.9058 42.2192H31.0126C31.0126 36.9273 27.8135 33.9458 22.168 33.9458C16.8361 33.9458 13.637 36.14 13.637 39.8314C13.637 44.3102 18.9313 45.2137 25.1413 46.3108M69.2641 72.0605L80.4045 26.7565H94.1419L79.9403 76.8491H58.4498L44.2607 26.7565H57.9856L69.1261 72.0605H69.2641ZM126.647 25.8917C140.247 25.8917 148 36.3207 148 51.9512C148 67.2978 139.645 78.1785 126.647 77.9978C125.042 77.9978 123.448 77.7655 121.905 77.3137C120.362 76.862 118.894 76.1908 117.539 75.3131C116.172 74.4483 114.942 73.377 113.864 72.1509C112.797 70.9247 111.894 69.5565 111.204 68.0722H111.053L106.324 76.8491H98.1565V0H110.966V36.3078H111.116C111.718 34.746 112.559 33.2746 113.588 31.9581C114.629 30.6415 115.858 29.5057 117.238 28.5764C118.606 27.6471 120.111 26.9501 121.692 26.4854C123.285 26.0337 124.916 25.8272 126.572 25.8788L126.647 25.8917ZM134.815 51.9899C134.815 44.0778 131.816 36.3207 122.482 36.3207C116.222 36.3207 112.546 40.438 111.016 45.73C110.865 46.2376 110.736 46.7496 110.627 47.2659C110.518 47.7822 110.43 48.3028 110.363 48.8277C110.288 49.3526 110.234 49.8774 110.2 50.4023C110.167 50.9272 110.15 51.4564 110.15 51.9899C110.15 52.532 110.167 53.0741 110.2 53.6162C110.234 54.1583 110.284 54.6961 110.351 55.2296C110.426 55.7717 110.518 56.3052 110.627 56.8301C110.736 57.3636 110.865 57.8885 111.016 58.4048C112.672 64.071 116.699 67.543 122.482 67.543C130.7 67.543 134.815 61.1798 134.815 51.9899Z"
              fill="#003149"
            />
          </svg>
          <svg
            width="30%"
            height="6vh"
            viewBox="0 0 43 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={style.flash}
          >
            <path
              d="M10.1935 0L43 40L10.1935 80L0 73.7734L19.2994 40L0 6.22665L10.1935 0Z"
              fill="#00C0FF"
            />
          </svg>
        </div>
        <div className={style.emptyBox}></div>
        <div className={style.emptyBox}></div>
      </div>
    </div>
  );
};

export default AboutUS;
