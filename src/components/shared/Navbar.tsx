"use client"

import { logOut, selectUser } from "@/redux/feature/user/userReducer";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact', path: '/contact' },
]



const Navbar = () => {
    const pathname = usePathname()
    // const { data: session } = useSession()
    const user = useAppSelector(selectUser)
    console.log(pathname);
    const dispatch = useAppDispatch()
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className=" w-full py-1 relative bg-transparent dark:bg-gray-800  ">
            <div className="container  px-6 py-3 lg:py-1  mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Link href="/">

                            <div className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#31ffcc]  to-[#32ccff] bg-clip-text   text-transparent">

                                Alamin Sujon

                            </div>

                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div
                        className={`absolute  inset-x-0 z-20 w-full px-6 py-2 transition-all duration-300 ease-in-out bg-white  dark:bg-gray-800 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
                            }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
                            {
                                navLinks.map(el => <Link key={el.path} href={el.path} className={`px-3 py-1.5 mx-3  transition-colors duration-300 transform  lg:mt-0 text-black lg:text-white dark:text-gray-200 border border-transparent hover:bg+-[#31ffcc] dark:hover:bg-gray-700 ${pathname === el.path && 'border-[#31ffcc] opacity-95 text-[#31ffcc] dark:text-[#31ffcc] bg-[#31ffcc] dark:bg-gray-700'}`}>
                                    {el.name}
                                </Link>)

                            }
                            {
                                user && <Link className="ml-4 py-1.5  hover:bg-[#31ffcc] px-3 text-white " href={'/dashboard'}>
                                    Dashboard
                                </Link>
                            }

                        </div>


                    </div>
                    <div className="hidden lg:flex items-center gap-4">

                        <label className="swap swap-rotate">

                            <input type="checkbox" className="theme-controller" value="dark" />

                            {/* sun icon */}
                            <svg
                                className="swap-off text-white h-10 w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                            </svg>

                            {/* moon icon */}
                            <svg
                                className="swap-on h-10 text-white w-10 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24">
                                <path
                                    d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                            </svg>
                        </label>
                        {
                            user?.email ? <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <Image src={user?.image || '/avatar.png'} alt="avatar" width={40} height={40} />

                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content  rounded-box text-white shadow-xl border z-[1] mt-3 w-52 ">
                                    <Link href={'/dashboard'} className="py-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-sm transition-colors duration-500">Dashboard</Link>
                                    <li onClick={() => dispatch(logOut())}><a className=" py-2 px-4 bg-black text-white hover:bg-white hover:text-black rounded-sm transition-colors duration-500">Logout</a></li>
                                </ul>
                            </div> : <Link href={'/login'}
                                className="relative hidden py-1.5 px-4 border border-[#31ffcc] text-[#31ffcc] overflow-hidden
                       before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[#31ffcc]
                       before:transition-all before:duration-500 hover:before:w-full hover:text-black"
                            >
                                <span className="relative z-10 transition-colors duration-500">Login</span>
                            </Link>
                        }


                    </div>


                </div>
            </div>
        </nav>
    )
};

export default Navbar;