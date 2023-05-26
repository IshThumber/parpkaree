import React from "react";
import { useNavigate } from "react-router-dom";
const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative">
        <img
          src="https://paropakaareefoundation.org/wp-content/uploads/2023/02/children-outside-1.jpg"
          className="absolute object-cover aspect-auto w-full h-full min-w-full"
          alt=""
        />
        <div className="relative bg-gray-900 bg-opacity-60 mx-auto">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12 py-32">
                <h3 className="xl:text-2xl lg:text-2xl font-bold tracking-tight text-white ">
                  Though nature is the best healer of mankind, however, due to
                  our greed, nature is suffering badly and the motive of our NGO
                  is to cure nature and restore humanity so that all living
                  beings can stay in harmony.
                </h3>
                <h3 className="xl:text-2xl mb-8 text-right text-white">
                  - Anshul Solanki
                </h3>
                <p className="max-w-xl mb-4 text-base text-gray-300 md:text-lg">
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      window.open("mailto:Support@paropakaarefoundation.org");
                    }}
                  >
                    Support@paropakaarefoundation.org
                  </span>
                  <br />
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      window.open("tel:+91 9654035922");
                    }}
                  >
                    +(91) 9654035922
                  </span>
                </p>
                <button
                  className="relative bg-blue-500 hover:bg-blue-700 text-white font-normal px-6 py-2 rounded-full"
                  onClick={() => {
                    navigate("/donate");
                  }}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
