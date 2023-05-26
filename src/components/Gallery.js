import React from "react";
import { gallery } from "../utils/galleryMenu";

const Gallery = () => {
  return (
    <>
      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0">
        <div className="mx-auto sm:text-center">
          <div className="mb-10 md:mx-auto sm:text-center md:mb-12 ">
            <h1 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Our Projects
            </h1>
            <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4 py-8">
              {gallery.map((item) => (
                <div key={item.id}>
                  <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      className="object-cover w-full rounded-md"
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
