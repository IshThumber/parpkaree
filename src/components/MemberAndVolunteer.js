import React from "react";
import { useNavigate } from "react-router-dom";
const MemberAndVolunteer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0 ">
        <div className="mx-auto text-center w-full border rounded-lg shadow-xl pt-1 bg-secondary">
          <div className="mb-8 md:mx-auto sm:text-center">
            <h1 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto  ">
              Become a Member
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4 gap-6 flex flex-col">
              <p className="text-justify text-gray-700 md:text-lg">
                Paropakaaree Foundation welcomes new members. We currently have
                more than 100 members who just wish to spread happiness & love.
                Together we are strong to bring the change in the society.
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-normal px-6 py-2 rounded-full w-fit mx-auto"
                onClick={() => {
                  navigate("/member");
                }}
              >
                Join Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0  ">
        <div className="mx-auto text-center w-full border rounded-lg shadow-xl pt-1 bg-secondary">
          <div className="mb-8 md:mx-auto sm:text-center">
            <h1 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto  ">
              Become Volunteer to Serve Humanity
            </h1>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full p-4 gap-6 flex flex-col">
              <p className="text-justify text-gray-700 md:text-lg">
                Paropakaaree Foundation offers a diverse range of volunteering
                opportunities. Through these, you can not only contribute
                towards the betterment of the society & environment, but also
                undergo a transformational journey for yourselves.
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-normal px-6 py-2 rounded-full w-fit mx-auto"
                onClick={() => {
                  navigate("/volunteer");
                }}
              >
                Become Volunteer
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberAndVolunteer;
