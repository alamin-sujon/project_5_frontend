"use client"
import Image from "next/image"
import React, { useState } from "react"
import LogoutButton from "../LogoutButton"
import Link from "next/link"

import { FaBlogger } from "react-icons/fa6";

// import { FaProjectDiagram } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

import { MdMessage } from "react-icons/md";
import { VscProject } from "react-icons/vsc";
import { usePathname } from "next/navigation"
import { bebasNeue } from "../customFont"
import { useAppSelector } from "@/redux/hooks"
import { selectUser } from "@/redux/feature/user/userReducer"


const links = [
    {
        href: "/dashboard",
        title: "Dashboard",
        icon: MdDashboard
    },
    {
        href: "/dashboard/blogs",
        title: "Blogs Management",
        icon: FaBlogger
    },
    {
        href: "/dashboard/projects",
        title: "Projects Management",
        icon: VscProject
    },
    {
        href: "/dashboard/messages",
        title: "Messages",
        icon: MdMessage
    },

]

export default function Sidebar() {

    const user = useAppSelector(selectUser)


    const [isSideNavOpen, setIsSideNavOpen] = useState(false)
    const pathname = usePathname()

    return (
        <div>

            <button
                title="Side navigation "
                type="button"
                className={`visible  shadow-2xl fixed left-6 top-4 z-40 order-10 block h-10 w-10 self-center rounded bg-base-200 opacity-100 lg:hidden ${isSideNavOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                    }`}
                aria-haspopup="menu"
                aria-label="Side navigation"
                aria-expanded={isSideNavOpen ? "true" : "false"}
                aria-controls="nav-menu-4"
                onClick={() => setIsSideNavOpen(!isSideNavOpen)}
            >
                <div className="absolute  top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
                    ></span>
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                    ></span>
                    <span
                        aria-hidden="true"
                        className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                    ></span>
                </div>
            </button>


            <aside
                id="nav-menu-4"
                aria-label="Side navigation"
                className={`fixed top-0 bg-white bottom-0  left-0 z-40 flex w-64 flex-col border-r border-r-slate-200  text-white transition-transform lg:translate-x-0 ${isSideNavOpen ? "translate-x-0" : " -translate-x-full"
                    }`}
            >
                <div className="flex flex-col items-center gap-4 border-b border-slate-200 p-6">
                    <div className="shrink-0">
                        <a
                            href="#"
                            className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
                        >
                            <Image
                                src={user?.image as string}
                                // src="https://i.pravatar.cc/40?img=7"
                                alt="user name"
                                title="user name"
                                width="48"
                                height="48"
                                className="max-w-full rounded-full"
                            />
                            <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                                <span className="sr-only"> online </span>
                            </span>
                        </a>
                    </div>
                    <div className="flex min-h-[2rem] w-full min-w-0 flex-col items-start justify-center gap-0 text-center">
                        <h4 className="w-full truncate text-base text-slate-800">
                            {user?.name}
                        </h4>
                        <p className="w-full truncate text-sm text-slate-800">
                            {user?.email}
                        </p>
                    </div>
                </div>
                <nav
                    aria-label="side navigation"
                    className="flex-1 divide-y divide-slate-500 overflow-auto"
                >
                    <div>
                        <ul className="flex  mt-2 flex-1 flex-col space-y-3 gap-1 py-3">
                            {
                                links.map((link, index) => <li key={index} className="px-3 ">
                                    <Link
                                        href={link.href}
                                        className={`flex items-center gap-2   px-4 py-1.5
                                              transition-colors duration-300 hover:text-white hover:bg-[#F42D43] ${link.href === pathname ? "bg-[#F42D43] text-white" : "bg-transparent text-black"} ${bebasNeue.className}`}
                                    >
                                        <div className="flex items-center self-center">
                                            <link.icon
                                                className="h-6 w-6"
                                            />
                                        </div>
                                        <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden font-medium  truncate ">
                                            {link.title}
                                        </div>
                                    </Link>
                                </li>)
                            }



                        </ul>
                    </div>

                </nav>
                <div className="p-3">

                </div>
                <footer className="border-t border-slate-200 p-3">
                    <LogoutButton />

                </footer>
            </aside>

            {/*  <!-- Backdrop --> */}
            <div
                className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${isSideNavOpen ? "block" : "hidden"
                    }`}
                onClick={() => setIsSideNavOpen(false)}
            ></div>
            {/*  <!-- End Side navigation menu with user profile and alert message --> */}
        </div>
    )
}