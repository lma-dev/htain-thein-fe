
import Sidebar from "./Sidebar/page";
import SettingFloatButton from "./Button/SettingFloatButton";
export default function Layout({ children }) {

    return (
        <div>
            <div className="flex min-h-screen">
            <div class="h-screen sticky top-0">
                    <Sidebar />
                </div>
                <div className="p-5 flex-1">
                    {/* <Navbar /> */}
                    <main>{children}</main>
                    <SettingFloatButton />
                </div>
            </div>
        </div>
    );
}
