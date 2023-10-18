import React from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import {Disclosure} from "@headlessui/react"
import {
    MdOutlineSpaceDashboard,
    MdOutlineAnalytics,
    MdOutlineIntegrationInstructions,
    MdOutlineMoreHoriz,
    MdOutlineSettings,
    MdOutlineLogout,
} from "react-icons/md";
import {CgProfile} from "react-icons/cg";
import {SiOpenbadges} from "react-icons/si";

const SideNavBar = () => {
    return (
        <div>
            <Disclosure as="nav">
                <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:rind-white group hover:bg-gray-900">
                    <GiHamburgerMenu
                        className="block md:hidden h-6 w-6"
                        aria-hidden="true"
                    />
                </Disclosure.Button>
                <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
                    <div className="flex flex-col justify-start items-center h-full">
                        <div className="flex w-full border-b pb-6">
                            <img className="w-2/6 h-fit" src="/assets/LOGO%20NOIR.png"/>
                            <img className="w-4/6 h-fit self-center" src="/assets/TYPO%20NOIR.png"/>
                        </div>
                        <div className="my-4 pb-4 w-full">
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="/">
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto" >
                                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white "/>
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">DashBoard</h3>
                            </div>
                            </a>
                            <a href="./etudiants">
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                                <CgProfile className="text-2xl text-gray-600 group-hover:text-white "/>
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Eleves</h3>
                            </div>
                            </a>
                            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                            <a href="./badges">
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                                <SiOpenbadges className="text-2xl text-gray-600 group-hover:text-white "/>
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Badges</h3>
                            </div>
                            </a>
                            <a href="./login">
                                <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                                    <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white "/>
                                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Gestion</h3>
                                </div>
                            </a>
                        </div>
                        {/*<div className="my-3 border-b border-gray-100 pb-4 w-full">
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white "/>
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Settings</h3>
                            </div>
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white "/>
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">More</h3>
                            </div>
                        </div>*/}
                        <div className="pt-5 w-full justify-self-end border-t border-gray-100 mt-auto">
                            <div className="flex mb-2 justify-start items-center gap-4 px-5 border border-gray-200 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto ">
                                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white "/>
                                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold">Deconnexion</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </Disclosure>
        </div>
    )
}
export default SideNavBar;
