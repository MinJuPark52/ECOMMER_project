import React from "react";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Foo = () => {
  return (
    <div className="py-4 px-4 my-0 m-auto bg-slate-800">
      <div className="mb-3 flex pt-4 gap-5 text-2xl text-[#ffffff]">
        <FaYoutube />
        <FaInstagram />
        <FaTwitter />
      </div>

      {/* Copy Text */}
      <div className="text-[#ffffff]">
        <p>&copy;2024 Company. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Foo;
