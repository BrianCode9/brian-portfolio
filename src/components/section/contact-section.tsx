import React from "react";

const ContactSection = () => {
  return (
    <div className="flex justify-center bg-[#0a1f2b] px-6 py-12 md:px-16 md:py-20">
      <div className="flex w-full max-w-xl flex-col gap-8 text-white">
        <div>
          <div className="mb-2 text-3xl font-bold md:text-5xl">
            Want to Reach Out?
          </div>
          <div className="bg-orange-highlight h-1 w-16" />
        </div>
        <div className="bg-suit-teal w-full rounded-lg text-white">
          <div className="flex flex-col gap-3 p-6 md:p-10">
            <div className="mb-1 text-2xl font-bold md:text-3xl">
              Contact Me
            </div>
            <div className="bg-orange-highlight mb-2 h-1 w-12" />
            <div>Email: brianngo2948@gmail.com</div>
            <div>LinkedIn: Brianngo9</div>
            <div>Instagram: Brian_Ngo9</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
