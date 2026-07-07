import React from "react";

const YouTubeSection = () => {
  return (
    <div className="flex justify-center bg-white">
      <div className="flex w-600 justify-center bg-slate-300 pt-20 pb-20 text-black">
        <div className="flex flex-row gap-10">
          <div className="flex w-150 flex-col gap-10 p-10 text-black">
            <div className="decoration-orange-highlight text-6xl underline">
              Vietlastica
            </div>
            <div className="h-full">
              This is my YouTube channel where I like posting videos about
              trips, personal projects, and educational videos.
            </div>
          </div>
          <div className="w-150 p-10 text-black">
            <div className="flex grid grid-cols-2 grid-rows-3 gap-2">
              <div className="h-50 w-full border-2 p-5 text-center">N/A</div>
              <div className="h-50 w-full border-2 p-5 text-center">N/A</div>
              <div className="h-50 w-full border-2 p-5 text-center">N/A</div>
              <div className="h-50 w-full border-2 p-5 text-center">N/A</div>
              <div className="h-50 w-full border-2 p-5 text-center">N/A</div>
              <div className="h-50 w-full border-2 p-5 text-center">N/A</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
