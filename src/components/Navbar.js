import React from "react";
import Image from "next/image";

function Navbar({ user }) {
  return (
    <div className="w-full h-16 bg-black flex items-center justify-between px-8">
      <a className="text-white font-bold text-3xl cursor-pointer">Edvora</a>

      <div className="flex items-center">
        <p className="text-white font-bold mr-4">{user?.name}</p>
        <Image
          src={user?.url}
          className="cursor-pointer h-12 w-12 rounded-full"
          width="50px"
          height="50px"
        />
      </div>
    </div>
  );
}

export default Navbar;
