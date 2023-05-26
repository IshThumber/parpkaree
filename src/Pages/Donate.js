import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "../components/Footer";

const Donate = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <img
              className="mx:auto w-full p-8"
              src="https://paropakaareefoundation.org/wp-content/uploads/2023/02/PAROPAKAAREE-FOUNDATION-1024x512.png"
              alt=""
            />
          </div>
          <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col">
            <div className="w-full p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w rounded-md text-start p-2">
                  <p className="text-gray-700 w-full leading-relaxed text-lg">
                    <span className="font-bold mr-2">Name:</span>
                    Paropakaaree Foundation
                    <br />
                    <span className="font-bold mr-2">Bank:</span>
                    Axis Bank
                    <br />
                    <span className="font-bold mr-2">Account Number: </span>
                    922020002811843
                    <br />
                    <span className="font-bold mr-2">IFSC Code:</span>
                    UTIB0003155
                    <br />
                    <span className="font-bold mr-2">Account Type:</span>
                    Current A/c
                    <br />
                    <span className="font-bold mr-2">Branch:</span>
                    Vasant Square B DEL DL, New Delhi, 110070
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

export default Donate;
