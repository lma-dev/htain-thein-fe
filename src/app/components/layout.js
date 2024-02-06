import Sidebar from "./Sidebar/page";
import SettingFloatButton from "./Button/SettingFloatButton";
import Navbar from "./Navbar/page";
export default function Layout({ children }) {
  return (
    <div>
      <div className="relative flex min-h-screen bg-gray-50 divide-x">
        <div className="min-h-full inset-0 z-10 hidden bg-white xl:block xl:w-60">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1">
          <Navbar />
          <div className="p-5 xl:p-10">
            {" "}
            {/* Adjust padding for different screen sizes */}
            <main>{children}</main>
            <SettingFloatButton />
          </div>
        </div>
      </div>
    </div>
  );
}
