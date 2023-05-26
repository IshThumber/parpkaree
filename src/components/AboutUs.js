import React from "react";
import Accordion from "../utils/Accordion";

const AboutUs = () => {
  return (
    <>
      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0  ">
        <div className="mx-auto sm:text-center w-11/11">
          <div className="mb-10 md:mx-auto sm:text-center md:mb-12 ">
            <h1 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto  ">
              About us
            </h1>
            <p className="text-justify text-gray-700 md:text-lg">
              Paropakaaree, as the name suggests “selfless welfare” is committed
              to promote selfless service for the underprivileged humans of the
              society & environment. Paropakaaree Foundation is officially
              registered under the Indian Trust Act,1882. Paropakaaree
              Foundation is formed by young team under the leadership of Mr.
              Anshul Solanki.
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4 gap-6 flex lg:justify-between flex-col md:flex-row sm:flex-col">
              <img
                src="https://paropakaareefoundation.org/wp-content/uploads/2023/02/image_2021_04_12T05_41_12_001Z-p5uj0hqhh65oak628uc4wmxc7vtgs9qjgpwohz1k1m.png"
                alt="About us"
                className="h-3/4 object-cover object-center aspect-auto"
              />
              <div>
                <h2 className="mb-2 font-bold text-2xl">
                  <Accordion />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
