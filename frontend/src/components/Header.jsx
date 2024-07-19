import React from "react";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="bg-secondary shadow-lg px-8">
      <div className="w-full max-w-[1200px] h-[64px] flex items-center mx-auto">
        <div className="flex justify-between items-center w-full">
          <div>
            <img className="h-[28px]" src={logo} alt="logo" />
          </div>
          <div>
            <nav>
              <ul className="text-light flex gap-x-[146px]">
                <li>Home</li>
                <li>About</li>
                <li>Lab</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
