import React from "react";

const Biography = () => {
  return (
    <div className="container biography">
      <div className="banner">
        {/* Direct path from public folder */}
        <img src="/aboutUs.png" alt="aboutUs" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          Since its inception in 2024, HealthCare Medical Institute has been the
          leading healthcare provider in Prayagraj (formerly Allahabad). We have
          built a reputation for excellence through our unwavering commitment to
          quality medical care...
        </p>
        <p>We are all in 2024!</p>
        <p>This MERN STACK PROJECT is developed by Piyush.</p>
        <p>
          At HealthCare Medical Institute, we believe in providing comprehensive
          healthcare solutions with cutting-edge technology and compassionate
          care...
        </p>
        <p>Excellence in Healthcare!</p>
        <p>Developed with ❤️ by Piyush</p>
      </div>
    </div>
  );
};

export default Biography;
