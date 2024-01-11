
import Navbar from "./Navbar/page";
import Sidebar from "./Sidebar/page";

export default function Layout({ children }) {

    return (
        <div>
            <div className="flex min-h-screen">
                <div className="">
                    <Sidebar />
                </div>
                <div className="p-5 flex-1">
                    <Navbar />
                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}
