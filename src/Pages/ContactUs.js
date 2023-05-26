import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Contact Us
            </h1>
            <p className="text-xl text-center sm:text-right align-top font-light">
              “Think of Giving not as a Duty, But as a Privilege.”
            </p>
          </div>

          <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col">
            <div className="w-full p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w rounded-md text-start p-2">
                  <div className="w-full rounded-md text-start p-2 my-4 mt-0">
                    <h2 className="font-bold text-xl mb-3">
                      <span className="text-gray-800">Addresses</span>
                    </h2>
                    <p className="text-gray-600">
                      <span className="font-bold">Registered Address: </span>
                      1/4, F/F Madanpur Khadar Opp Gate No.-2. Near Pocket-C
                      Sarita Vihar, Delhi-110076
                    </p>
                    <br />
                    <p className="text-gray-600">
                      <span className="font-bold">Head Office: </span> House no.
                      22/634, Ground Floor. Lane-22, Madangir DDA Flats, South
                      Delhi-11062, India
                    </p>
                  </div>

                  <div className="w-full rounded-md text-start p-2 my-4">
                    <h2 className="font-bold text-xl mb-3">
                      <span className="text-gray-800">Contacts</span>
                    </h2>
                    <p className="text-gray-600">
                      <span className="font-bold">Contact No: </span> 9654035922
                      <br />
                      <span className="font-bold">Contact No: </span>8881140335
                    </p>
                  </div>

                  <div className="w-full rounded-md text-start p-2 my-4">
                    <h2 className="font-bold text-xl mb-3">
                      <span className="text-gray-800">Email</span>
                    </h2>
                    <p
                      className="text-gray-600"
                      onClick={() => {
                        window.open(
                          "mailto:paropakaareefoundation@gmail.com",
                          "_blank"
                        );
                      }}
                    >
                      paropakaareefoundation@gmail.com
                    </p>
                  </div>

                  <div className="w-full rounded-md text-start p-2 my-4">
                    <h2 className="font-bold text-xl mb-3">
                      <span className="text-gray-800">Social Media</span>
                    </h2>
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

export default ContactUs;
