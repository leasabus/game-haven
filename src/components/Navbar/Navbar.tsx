import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";

export const Navbar: React.FC = () => {
  return (
    <div className="m-8 text-white flex flex-row items-center justify-between p-4">
      <div className="flex flex-row gap-4 items-center">
        <span className=" border-solid border-2 border-details rounded-full p-1 font-bold">
          GamerHaven
        </span>

        <div className="flex gap-6 ml-20">
          <span>Mouses</span>
          <span>Keyboards</span>
          <span>Headsets</span>
          <span>Mousepads</span>
          <span>...</span>
        </div>
      </div>

      <div className="flex flex-row items-center gap-6">
        <span className="text-details">
          <FaRegUserCircle size={26} />
        </span>
        <span>Leandro</span>
        <span>
          <CiShoppingCart size={26} />
        </span>
      </div>
    </div>
  );
};
