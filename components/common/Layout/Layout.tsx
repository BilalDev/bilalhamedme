import React, { FC } from "react";
import cn from "classnames";
import s from "./Layout.module.css";
import Header from "../Header";
import Footer from "../Footer";

const Layout: FC = ({ children }) => {
  return (
    <div className={cn(s.root)}>
      <div className="container flex flex-col min-h-screen px-4 pt-10 mx-auto">
        <Header />
        <main className="flex-grow">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
