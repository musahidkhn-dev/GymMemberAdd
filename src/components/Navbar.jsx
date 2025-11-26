import React from "react";

const Navbar = ({ changeTheme, dark }) => {
  return (
    <nav
      className={
        dark
          ? " w-full  bg-[#45474B] p-5 flex justify-between items-center  "
          : " w-full  bg-[#99BC85]  p-5 flex justify-between items-center  "
      }
    >
      {/* <img className="h-25" src="/src/assets/log.png" alt="" /> */}
      <p className="text-4xl tracking-widest text-white  font-semibold font-King">
        Royal Fitness Gym
      </p>
      <button
        onClick={ changeTheme}
        className={dark ? "text-white font-black bg-[#272121] hover:bg-[#0f0c0c] p-1 px-2 rounded-sm cursor-pointer":"text-white font-black bg-green-800 hover:bg-green-900 p-1 px-2 rounded-sm cursor-pointer"}      >
        Theme
      </button>
    </nav>
  );
};

export default Navbar;
