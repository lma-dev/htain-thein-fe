'use client'
import Link from "next/link";
import UserProfileIconDropdown from "../DropDown/UserProfileIconDropdown";
import { AlignLeft } from 'lucide-react';
import MobileSidebar from "../MobileSidebar/page";
import { useState } from "react";

const Navbar = () => {

    const [open, setOpen] = useState(false);


    return (
        <div>
            <div className="mt-5">
                <div className="sm:hidden md:hidden flex justify-between border-b border-gray-200 ">
                    <div className="text-center ml-5">
                        <div className="inline-flex">
                            <AlignLeft size={24} className="mr-5 cursor-pointer text-gray-600" onClick={() => setOpen(!open)} />
                            <span className="align-middle font-bold text-lg uppercase text-gray-600">
                                HTAIN THEIN
                            </span>
                        </div>
                    </div>
                    <div className="mr-7">
                        <UserProfileIconDropdown />
                    </div>
                </div>
                <div className="hidden sm:block md:block">
                    <div className="border-b border-gray-200">
                        <div className="flex justify-between px-5">
                            <div></div>
                            <nav className="-mb-px flex gap-6 text-center align-middle justify-center" aria-label="Tabs">
                                <a
                                    href="#"
                                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    Settings
                                </a>

                                <a
                                    href="#"
                                    className="shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                >
                                    About
                                </a>

                                <Link
                                    href="/notifications"
                                    className="shrink-0 border-b-2 border-sky-500 px-1 pb-4 text-sm font-medium text-sky-600"
                                    aria-current="page"
                                >
                                    Notifications
                                </Link>
                            </nav>

                            <div>
                                <UserProfileIconDropdown />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navbar */}

            {open && <MobileSidebar setOpen={setOpen} open={open} />

            }
        </div>
    )

}

export default Navbar;