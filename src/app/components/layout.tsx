import Sidebar from "./Sidebar/page";
import SettingFloatButton from "./Button/SettingFloatButton";
import Navbar from "./Navbar/page";
import { FC } from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="relative flex min-h-screen bg-gray-50 divide-x">
        <div className="min-h-full hidden bg-white xl:block lg:block md:block">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <Navbar />
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
