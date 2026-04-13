import React from "react";
import styles from "./HeroSection.module.css";
import headphones from "../../assets/headphones.png";

function HeroSection() {
  return (
    <section className={styles.hero}>
      <div>
        {/* <h1>100k+ Songs</h1> */}
        {/* <p>Listen to your favorite music</p> */}
      </div>
      <img src={headphones} alt="Headphones" />
    </section>
  );
}

export default HeroSection;
