import React from "react";

const Footer = ({dark}) => {
  return (
    <footer className={dark ? "bg-[#1F1D36] text-white  fixed bottom-0 w-full ":"bg-amber-50 border border-t-2 fixed bottom-0 w-full "}>
      <p className=" p-2 text-2xl font-bold  text-center w-full">
        Members List
      </p>
    </footer>
  );
};

export default Footer;
