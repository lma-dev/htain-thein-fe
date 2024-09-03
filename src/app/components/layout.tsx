import SideBar from "./Sidebar/SideBar";
import SettingFloatButton from "./Button/SettingFloatButton";
import NavBar from "./Navbar/NavBar";
import { FC } from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="relative flex min-h-screen bg-gray-50 divide-x">
        <div className="min-h-full hidden bg-white xl:block lg:block md:block">
          <SideBar />
        </div>
        <div className="flex flex-col flex-1">
          <NavBar />
          <div className="p-5 xl:p-10">
            <main>{children}</main>
            <SettingFloatButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
