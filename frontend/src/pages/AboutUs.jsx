import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
const AboutUs = () => {
  return (
    <>
      <Hero
        title={"Learn More About Us | HealthCare Medical Institute"}
        imageUrl={"../public/aboutUs.png"}
      />
      <Biography imageUrl={"../public/aboutUs.png"} />
    </>
  );
};

export default AboutUs;