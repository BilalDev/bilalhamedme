import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
      <div className="flex items-center">
        <a
          className="text-gray-700 border-b border-gray-900 hover:text-black"
          href="https://github.com/BilalDev/bilalhamedme.git"
        >
          page repository
        </a>
        <a href="https://github.com/BilalDev/bilalhamedme.git">
          <img className="m-2" src="/github.svg" alt="github" />
        </a>
        <span className="text-gray-700 border-b border-gray-900 hover:text-black">Press G</span>
      </div>
    </footer>
  );
};

export default Footer;
