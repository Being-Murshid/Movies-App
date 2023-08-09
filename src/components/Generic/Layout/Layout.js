import React from "react";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[300px] bg-white">
        <div className="">
          <div className="bg-red-400 my-3 p-10">
            <h1>hello world</h1>
          </div>
          <div className="bg-red-400 my-3 p-10">
            <div className="p-4 bg-white relative">
              <h1 className="absolute">hello world</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default Layout;
