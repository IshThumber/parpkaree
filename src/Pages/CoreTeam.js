import React from "react";
import NavbarTop from "../components/Navbar";
import Footer from "../components/Footer";

const CoreTeam = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Core Team
            </h1>
            <p className="text-xl text-center sm:text-right align-top font-light">
              “Think of Giving not as a Duty, But as a Privilege.”
            </p>
          </div>
          <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col">
            <div className="w-full p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w rounded-md text-start p-2">
                  <h2 className="text-gray-700 w-full leading-relaxed text-lg font-bold">
                    Core Team
                  </h2>
                  <p className="text-gray-700 w-full leading-relaxed">
                    The core team members are the Pillars of Paropakaaree
                    Foundation. Youth can bring the change in the society & this
                    is proved by the Core Team of Paropakaaree Foundation.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-6">
                    Our Core Team firmly believes that our nation can greatly
                    benefit from our resourceful youth population by having a
                    plan and vision to change the future of our country.
                    <ul className="list-disc indent-4 ml-8 py-2 ">
                      <li>Mr. Alok Verma (Project ESKUL Head)</li>
                      <li>
                        Ms. Vatsala Sharma ( Project Heart of Strays Head )
                      </li>
                      <li>Mr. Harendar Pratap ( Project NOURISH Head)</li>
                      <li>Mr. Rohan Rout ( Project NAARI SHAKTI Head)</li>
                    </ul>
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

export default CoreTeam;
