import React from "react";
import NavbarTop from "./../components/Navbar";
import Footer from "../components/Footer";

const MissionNVision = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Mission & Vision
            </h1>
            <p className="text-xl text-center sm:text-right align-top font-light">
              “Think of Giving not as a Duty, But as a Privilege.”
            </p>
          </div>
          <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col">
            <div className="w-full md:w-1/2 lg:w-1/2 p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w-sm rounded-md text-start p-2">
                  <h2 className="font-bold text-xl mb-3">
                    <span className="text-gray-800">Our Mission</span>
                  </h2>
                  <p className="text-gray-700 w-full leading-relaxed">
                    We want to solve the issues of target people by our efforts
                    and support of civil society.
                    <br />
                    <br />
                    To collectively ensure environmental and social justice,
                    human dignity, and respect for human rights and peoples’
                    rights so as to secure sustainable societies, based on
                    people promoting Humanity toward all living being in nature
                    and be free from all forms of domination and exploitation.
                    <br />
                    <br />
                    We want to cure the nature so that people can get maximum
                    benefits and energy from it.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2 p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w-sm rounded-md text-start p-2">
                  <h2 className="font-bold text-xl mb-3">
                    <span className="text-gray-800">Our Vision</span>
                  </h2>
                  <p className="text-gray-700 w-full leading-relaxed">
                    The vision is support the target people should be capable
                    enough to earn their livelihood and live a life of dignity.
                    <br />
                    <br />
                    Our vision is of a peaceful and sustainable world based on
                    societies living in harmony with nature. We believe that our
                    generation’s future will be better because of what we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default MissionNVision;
