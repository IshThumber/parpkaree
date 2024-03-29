import React from "react";
import { project } from "../utils/imagesMenu";

const Projects = () => {
  return (
    <>
      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0">
        <div className="mx-auto sm:text-center">
          <div className="mb-10 md:mx-auto sm:text-center md:mb-12 ">
            <h1 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Our Projects
            </h1>
            <p className="text-justify text-gray-700 md:text-lg">
              Paropakaaree is a platform for selfless service for uplifting the
              helpless and needy. Also, the mission of Paropakaaree is to
              empower generations beyond the boundaries of caste, creed,
              communities, cultures, colours, religion and deliver stability,
              hope and well-being.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 w-full mx-auto">
            {project.map((item, i) => (
              <div
                className="max-w-xs rounded-md text-gray-900 text-start px-3 py-2"
                key={i}
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-cover object-center w-full rounded-md bg-gray-500"
                />
                {console.log(item.img)}
                <div className="mt-6 mb-2">
                  <h2 className="text-xl font-semibold tracking-wide ">
                    {item.title}
                  </h2>
                </div>
                <p className="text-gray-900">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
