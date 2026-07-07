import React from "react";
import AnimatedButton from "@/components/ui/animatedbutton";

const Footer = () => {
  return (
    <div className="sticky bg-[#0a1f2b] px-5 pt-5 pb-10 text-white">
      <div className="flex flex-col justify-center">
        <div className="text-md flex items-center justify-end space-x-10">
          <a href="#">
            <AnimatedButton variant="teal">Back Up</AnimatedButton>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
