import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="aboutUs" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Since its inception in 2007, Health Care Clinic has been the leading healthcare provider in Prayagraj (formerly Allahabad). We have built a reputation for excellence through our unwavering commitment to quality medical care. Our clinic is home to a team of highly skilled and experienced doctors who bring a wealth of knowledge to their respective specialties, ensuring that every patient receives the best possible treatment. At Health Care Clinic, we pride ourselves on our state-of-the-art facilities, compassionate service, and adherence to the highest standards of healthcare. Over the years, our dedication to patient well-being and exceptional service has earned us the trust and respect of the community, making us a trusted name in healthcare.
          </p>
          <p>We are all in 2024!</p>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            assumenda exercitationem accusamus sit repellendus quo optio dolorum
            corporis corrupti. Quas similique vel minima veniam tenetur
            obcaecati atque magni suscipit laboriosam! Veniam vitae minus nihil
            cupiditate natus provident. Ex illum quasi pariatur odit nisi
            voluptas illo qui ipsum mollitia. Libero, assumenda?
          </p>
          <p>Lorem ipsum dolor sit amet!</p>
          <p>Coding is fun!</p>
        </div>
      </div>
    </>
  );
};

export default Biography;