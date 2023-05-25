import { PropsWithChildren } from "react";
import Header from "componets/header/header";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <div id="wrapper">
      <div id="page-wrapper" className="full--width p--20 ">
        <Header/>{props.children}
        {/* {props.children} */}
      </div>
    </div>
  );
};

export default Layout;
