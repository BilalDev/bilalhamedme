import React, { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div>
      <div className="overflow-hidden cursor-pointer">
        <Link href="/" passHref>
          <img
            className="mx-auto rounded-full"
            width={72}
            height={72}
            src="/me.jpeg"
            alt={"selfie"}
          />
        </Link>
      </div>

      <h1 className="text-4xl font-bold text-center">Bilal Hamed Abdallah</h1>
      <h3 className="text-center">DEVELOPMENT</h3>
    </div>
  );
};

export default Header;
