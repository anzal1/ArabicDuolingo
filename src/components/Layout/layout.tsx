import React from "react";
import Sidebar from "./sidebar";

const Layout = (props: any) => {
  return (
    <>
      <div>
        <Sidebar children={props.children} />
      </div>
    </>
  );
};

export default Layout;
