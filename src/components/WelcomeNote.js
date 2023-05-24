import React from "react";

const WelcomeNote = () => {
  return (
    <>
      <div class="max-w-screen rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4 w-1/2 m-auto">
          <div class="font-normal text-xl flex flex-row text-justify">
            Though nature is the best healer of mankind, however, due to our greed, nature is suffering badly and the motive of our NGO is to cure
            nature and restore humanity so that all living beings can stay in harmony.
          </div>
          <div class="font-normal text-xl flex flex-row text-justify justify-end">- Anshul Solanki</div>
        </div>
        <div class="px-6 py-4 w-1/2 m-auto flex justify-between">
          <div class="font-normal text-md flex flex-row text-justify">
            Support@paropakaarefoundation.org
            <br />
            +(91) 9654035922
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal  px-6 rounded-full">
            Donate
          </button>
        </div>
      </div>
    </>
  );
};

export default WelcomeNote;
