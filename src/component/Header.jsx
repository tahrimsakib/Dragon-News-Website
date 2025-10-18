import React from "react";
import logo from "../assets/logo.png";
import { format } from "date-fns";
const Header = () => {
  return (
    <div className="flex flex-col mt-8 justify-center items-center gap-2">
      <img src={logo} alt="" />
      <p className="text-accent">Journalism Without Fear or Favour</p>
      <p className="text-accent font-semibold">
        {format(new Date(), "EEEE, Q MMMM RRRR")}
      </p>
    </div>
  );
};

export default Header;
