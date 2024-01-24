
import Sidebar from "./Sidebar/page";
import SettingFloatButton from "./Button/SettingFloatButton";
import Navbar from "./Navbar/page";
export default function Layout({ children }) {
    return (
        <div>
            <div className="flex min-h-screen">
                <div className="min-h-full fixed">
                    <Sidebar />
                </div>
                <div className="flex-1 ">
                    <Navbar />
                    <div className="p-5 ml-48">
                        <main>{children}</main>
                        <SettingFloatButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
