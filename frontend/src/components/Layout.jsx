import React from "react";
import Header from "./Header";
import Meteors from "./magicui/Meteors";

const Layout = ({ children }) => {
  return (
    <div className="pb-[100px]">
      <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden top-0 left-0">
        <Meteors number={20} />
      </div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
