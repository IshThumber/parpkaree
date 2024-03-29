import React from "react";
import { useNavigate } from "react-router-dom";
import memberImage from "../assets/images/Asset1.png";
import volunteerImage from "../assets/images/Asset2.png";

const MemberAndVolunteer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0">
        <div className="mx-auto text-center w-full border rounded-lg shadow-xl pt-1 pb-3 bg-secondary ">
          <div className="mb-8 md:mx-auto sm:text-center ">
            <h1 className="max-w-lg mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto  ">
              Become a Member
            </h1>
          </div>
          <div className="flex-wrap justify-center">
            <div className="w-full p-4 gap-6 align-middle sm:grid sm:grid-cols-4 flex flex-col items-center">
              <p className="text-left text-gray-700 md:text-lg col-span-3 pl-5">
                Paropakaaree Foundation welcomes new members. We currently have
                more than 100 members who just wish to spread happiness & love.
                Together we are strong to bring the change in the society.
              </p>
              <img
                className="w-1/2 md:w-full lg:w-[60%] aspect-square object-contain"
                src={memberImage}
                alt=""
              />
            </div>
          </div>
          <div className="w-full p-4 gap-6 flex flex-col">
            <button
              className="bg-[#2C2C54] hover:bg-[#4D4D93] text-white font-normal px-10 py-2 rounded-full w-fit mx-auto"
              onClick={() => {
                navigate("/member");
              }}
            >
              Join Us
            </button>
          </div>
        </div>
      </div>

      {/*  */}

      <div className="mx-auto sm:max-w-screen-xl md:max-w-screen-xl lg:max-w-screen-xl p-8 sm:p-8 md:px-24 md:py-10 lg:px-8 lg:py-20 lg:pb-0 md:pb-0  ">
        <div className="mx-auto text-center w-full border rounded-lg shadow-xl pt-1 pb-3 bg-secondary">
          <div className="mb-8 md:mx-auto sm:text-center">
            <h1 className="max-w-xl mb-6 font-serif text-3xl font-bold leading-none mx-auto text-center mt-6 tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Become Volunteer to Serve Humanity
            </h1>
          </div>
          <div className="flex-wrap justify-center">
            <div className="w-full p-4 gap-6 align-middle sm:grid sm:grid-cols-4 flex flex-col items-center">
              <p className="text-left text-gray-700 md:text-lg col-span-3 pl-5">
                Paropakaaree Foundation offers a diverse range of volunteering
                opportunities. Through these, you can not only contribute
                towards the betterment of the society & environment, but also
                undergo a transformational journey for yourselves.
              </p>
              <img
                className="w-1/2 md:w-full lg:w-[60%] aspect-square object-contain"
                src={volunteerImage}
                alt=""
              />
            </div>
          </div>
          <div className="w-full p-4 gap-6 flex flex-col">
            <button
              className="bg-[#2C2C54] hover:bg-[#4D4D93] text-white font-normal px-10 py-2 rounded-full w-fit mx-auto"
              onClick={() => {
                navigate("/volunteer");
              }}
            >
              Become Volunteer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberAndVolunteer;
