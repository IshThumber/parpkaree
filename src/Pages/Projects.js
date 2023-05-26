import React from "react";
import NavbarTop from "./../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <>
      <div className="bg-primary">
        <nav>
          <NavbarTop />
        </nav>

        <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:p-0 lg:pb-10 md:pb-0 mt-3">
          <div className="mx-auto sm:text-center p-1 align-top mb-10">
            <h1 className=" mb-6 font-serif text-3xl font-bold mx-auto text-center sm:text-left text-gray-900 sm:text-4xl md:mx-auto">
              Our Projects
            </h1>
            <p className="text-xl text-center sm:text-right align-top font-light">
              “Think of Giving not as a Duty, But as a Privilege.”
            </p>
          </div>
          <div className="flex justify-center gap-3 w-full mx-auto sm:flex-row flex-col">
            <div className="w-full p-4 flex">
              <div className="flex flex-col items-left justify-start ">
                <div className="max-w rounded-md text-start p-2">
                  <p className="text-gray-700 w-full leading-relaxed">
                    Paropakaaree is a platform for selfless welfare for the
                    underprivileged humans of the society & environment. Also,
                    the mission of Paropakaaree is to empower generations beyond
                    the boundaries of caste, creed, communities, cultures,
                    colours, religion and deliver stability, hope and
                    well-being. Through all the projects or seva activities, ACT
                    is selflessly committed to social service in India.
                  </p>
                  <p className="text-gray-700 w-full leading-relaxed mt-6">
                    Our core areas of activity include the following:
                    <ul className="list-disc indent-4 ml-8 py-2">
                      <li>ESKUL</li>
                      <li>Heart for Strays</li>
                      <li>Naari Shakti</li>
                      <li>NOURISH</li>
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

export default Projects;
