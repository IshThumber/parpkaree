import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "../components/Footer";

const Member = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Be a Member
            </h1>
            <p className="text-xl text-center sm:text-right align-top font-light">
              “Think of Giving not as a Duty, But as a Privilege.”
            </p>

            <p className="text-lg text-center sm:text-left align-top font-light mt-8">
              <span className="font-bold">
                The best way to find yourself is to lose yourself in the service
                of others - Mahatma Gandhi
              </span>
              <br />
              Paropakaaree Foundation welcomes new members. We currently have
              more than 100 members who just wish to spread happiness & love.
              Together we are strong to bring the change in the society.
            </p>
            <img
              className="w-3/5 mx-auto mt-10"
              src="https://paropakaareefoundation.org/wp-content/uploads/2023/02/BE-A-PROUD-MEMBER-OF-PAROPAKAAREE-1024x577.png"
              alt=""
            />
          </div>
        </div>

        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Member;
