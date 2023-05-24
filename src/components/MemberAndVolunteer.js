import React from "react";

const MemberAndVolunteer = () => {
  return (
    <>
      <div className="mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pb-0 md:pb-0 pt-8">
        <div className="mx-auto text-center w-11/11">
          <div className="mb-10 md:mx-auto sm:text-center md:mb-12 ">
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Become a Member
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4 gap-6 flex flex-col">
              <p className="text-justify text-gray-700 md:text-lg">
                Paropakaaree Foundation welcomes new members. We currently have more than 100 members who just wish to spread happiness & love.
                Together we are strong to bring the change in the society.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mx-auto">Join Us</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20 lg:pb-0 md:pb-0 pt-8">
        <div className="mx-auto text-center w-11/11">
          <div className="mb-10 md:mx-auto sm:text-center md:mb-12 ">
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Become Volunteer to Serve Humanity
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4 gap-6 flex flex-col">
              <p className="text-justify text-gray-700 md:text-lg">
                Paropakaaree Foundation offers a diverse range of volunteering opportunities. Through these, you can not only contribute towards the
                betterment of the society & environment, but also undergo a transformational journey for yourselves.
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-fit mx-auto">Become Volunteer</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberAndVolunteer;
