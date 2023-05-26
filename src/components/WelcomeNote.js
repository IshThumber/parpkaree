import React from "react";

const WelcomeNote = () => {
  return (
    <>
      <div  className="mx-auto w-3/4 bg-green-700 font-bold">
        <div  className="py-4 px-6 mx-auto bg-light-green-200">
          <div  className="font-normal text-xl flex flex-row text-justify">
            Though nature is the best healer of mankind, however, due to our
            greed, nature is suffering badly and the motive of our NGO is to
            cure nature and restore humanity so that all living beings can stay
            in harmony.
          </div>
          <div  className="font-normal text-xl flex flex-row text-justify justify-end">
            - Anshul Solanki
          </div>
        </div>
        <div  className="py-4 px-6 mx-auto font-bold bg-light-green-200 flex flex-col text-center md:flex-row md:justify-between md:text-left text-red-600 sm:text-blue-600 md:text-amber-600 lg:text-green-600 xl:text-purple-600">
          <div  className="font-normal text-md">
            Support@paropakaarefoundation.org
            <br />
            +(91) 9654035922
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal px-6 py-2 rounded-full">
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeNote;
