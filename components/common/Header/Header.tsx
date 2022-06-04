import React, { FC } from "react";
import cn from "classnames";

const Header: FC = () => {
  return (
    <div>
      <div className="overflow-hidden">
        <img
          className="mx-auto rounded-full"
          width={72}
          height={72}
          src="https://bilalhamed-me.s3.eu-west-3.amazonaws.com/me.jpeg"
          alt={"selfie"}
        />
      </div>

      <h1 className="text-4xl font-bold text-center">Bilal Hamed Abdallah</h1>
      <h3 className="text-center">DEVELOPMENT</h3>
    </div>
  );
};

export default Header;
