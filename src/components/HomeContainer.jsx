import React from "react";
import Delivery from "../img/delivery.png";
import HeroBg from "../img/heroBg.png";
import { heroData } from "../utils/data";
import emailjs from 'emailjs-com';

const HomeContainer = () => {
  function sendWelcomeEmail() {
    const templateParams = {
      to_email: 'recipient@example.com', // The recipient's email address
      subject: 'Welcome', // The subject of the email
      message: 'Welcome to our website!', // The content of the email
    };
  
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      .then((response) => {
        console.log('Email sent successfully!', response);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  }
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 gap-2 top-0 w-full "
      id="home"
    >
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
        <button onClick={sendWelcomeEmail}>
        Send Mail
      </button>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={Delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>

        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        <span className="text-headingColor text-[1 rem] font-bold xs:text-[1 rem]">
             OUR RESTAURANT
             </span> sets a <span className="text-orange-600 text-[1 rem] xs:text-[1 rem]">
             high standard
             </span> for its food quality and ensures that guests receive the 
             same quality with every meal .
              It compel our guests to return for <span className="text-orange-600 text-[1 rem] xs:text-[1 rem]">
               repeat visits.
             </span> <br/>
            
          <div className="mt-2"> <span className="text-orange-600 text-[1 rem]  xs:text-[1 rem]">
             OUR RESTAURANT
             </span> has High-quality ingredients and an <span className="text-orange-600 text-[1 rem]  xs:text-[1 rem]">
             experienced cook
             </span> for serving good food consistently.</div> 
           <p className="text-[1rem] sm:text-[1 rem] mt-3 font-bold tracking-wide text-headingColor">
          Rain or shine 
             <span className="text-orange-600 text-[1 rem] xs:text-[1 rem] ml-2">
             it's a fine time to dine.
             </span>
        </p>

         
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={HeroBg}
          className=" ml-auto h-420 w-full lg:w-auto lg:h-650"
          alt="hero-bg"
        />

        <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32  py-4 gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 lg:w-40 -mt-10 lg:-mt-20 "
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                  {n.name}
                </p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">
                  {n.decp}
                </p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">Rs.</span> {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
