"use client"

import { useEffect, useState } from "react"

export interface NavBarLink {
    url: string,
    label: string
}

export const NavBar = () => {

    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMobileToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    const links: NavBarLink[] = [
        {
            url: '/',
            label: 'Home'
        },
        {
            url: '/projects',
            label: 'Projects'
        },
        {
            url: '/skills',
            label: 'Skills'
        },
        {
            url: '/contact',
            label: 'Contact'
        },
    ]

    return <nav className="bg-zinc-900 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap sm:justify-center justify-end flex-wrap mx-auto p-4">
            <div className="items-center justify-between hidden sm:flex" id="navbar-sticky">
                <ul className="flex gap-4 p-0 font-medium rounded-lg">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Skills</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
            <button onClick={() => handleMobileToggle()} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                ) : (
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                )}
            </button>
        </div>
        {mobileOpen ? (
            <div className="items-center justify-between flex sm:hidden" id="navbar-sticky">
                <ul className="w-full gap-4 p-4 font-medium rounded-lg bg-zinc-800 mx-4">
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Home</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Projects</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Skills</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded hover:bg-gray-700">Contact</a>
                    </li>
                </ul>
            </div>
        ) : <></>}
    </nav >
}