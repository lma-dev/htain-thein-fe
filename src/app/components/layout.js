import Sidebar from "./Sidebar/page";
import SettingFloatButton from "./Button/SettingFloatButton";
import Navbar from "./Navbar/page";
export default function Layout({ children, lang }) {
  return (
    <div>
      <div className="relative flex min-h-screen bg-gray-50 divide-x">
        <div className="min-h-full hidden bg-white xl:block lg:block md:block">
          <Sidebar lang={lang} />
        </div>
        <div className="flex flex-col flex-1">
          <Navbar lang={lang} />
          <div className="p-5 xl:p-10">
            <main>{children}</main>
            <SettingFloatButton lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}
