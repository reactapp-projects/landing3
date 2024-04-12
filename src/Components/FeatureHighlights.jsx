import React from "react";
import Card from "react-bootstrap/Card";
import style from "./FeatureHighlights.module.css";
import FeatureHighlightsLogo from "./FeatureHighlightsLogo";

const FeatureHighlights = () => {
  return (
    <div id="FeaturesHighlights" className={style.body}>
      <p className={style.first_text}>Feature Highlights</p>
      <p className={style.second_text}>
        Dive into Sparks with Features that Matter
      </p>
      <div className={style.grid}>
        <Card className={style.card}>
          <Card.Body>
            <Card.Title>
              <FeatureHighlightsLogo />
            </Card.Title>
            <Card.Text className={style.cardText}>
              Daily Engagement Prompts
            </Card.Text>
            <Card.Text>
              Kickstart your day with a spark! Our daily prompts are
              thoughtfully designed to inspire meaningful conversations,
              encouraging you to share and explore diverse perspectives.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Body>
            <Card.Title>
              <FeatureHighlightsLogo />
            </Card.Title>
            <Card.Text className={style.cardText}>
              AI-Personalized Content
            </Card.Text>
            <Card.Text>
              With our advanced AI technology, enjoy content that’s tailored
              just for you. Sparks learns your interests over time, ensuring
              that every prompt, conversation, and interaction resonates deeply.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Body>
            <Card.Title>
              <FeatureHighlightsLogo />
            </Card.Title>
            <Card.Text className={style.cardText}>
              Interactive Community Feed
            </Card.Text>
            <Card.Text>
              Experience the warmth of our community through a dynamic feed
              filled with authentic responses from friends and fellow thinkers.
              Like, comment, and share to keep the conversation glowing.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className={style.card}>
          <Card.Body>
            <Card.Title>
              <FeatureHighlightsLogo />
            </Card.Title>
            <Card.Text className={style.cardText}>
              Privacy-Centered Connections
            </Card.Text>
            <Card.Text>
              In Sparks, your privacy is paramount. Engage in conversations with
              peace of mind, knowing that your data and interactions are
              protected every step of the way.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default FeatureHighlights;
