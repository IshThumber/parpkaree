import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";

const Volunteer = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Volunteering
            </h1>
            <p className="text-xl text-center sm:text-right align-top font-light">
              “Think of Giving not as a Duty, But as a Privilege.”
            </p>

            <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col mt-6">
              <div className="w-full p-4 flex">
                <div className="flex flex-col items-left justify-start ">
                  <div className="max-w rounded-md text-start p-2">
                    <h2 className="text-gray-700 w-full leading-relaxed text-lg font-bold">
                      Volunteering/ Internship
                    </h2>
                    <p className="text-gray-700 w-full leading-relaxed">
                      Paropakaaree Foundation offers a diverse range of
                      volunteering opportunities. Through these, you can not
                      only contribute towards the betterment of the society &
                      environment, but also undergo a transformational journey
                      for yourselves.
                      <br />
                      <br />
                      We are glad to share that 500+ volunteers from & 50+
                      interns from different colleges/ corporates/ schools have
                      worked in the projects like ESKUL,NOURISH, Heart for
                      Strays, and Naari Shakti of Paropakaaree Foundation.
                      <br />
                      <br />
                      For Volunteering:- WhatsApp “Volunteering” on +(91)
                      9654035922
                      <br />
                      <br />
                      For Internship:- Mail the details on
                      <Link
                        onClick={() =>
                          window.open(
                            "mailto:support@paropakaareefoundation.org"
                          )
                        }
                      >
                        support@paropakaareefoundation.org
                      </Link>
                    </p>
                  </div>
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

export default Volunteer;
