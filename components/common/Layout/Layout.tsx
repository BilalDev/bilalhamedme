import React, { FC } from "react";
import cn from "classnames";
import s from "./Layout.module.css";

const Layout: FC = ({ children }) => {
  return (
    <div className={cn(s.root)}>
      <main className="fit">{children}</main>
    </div>
  );
};

export default Layout;
