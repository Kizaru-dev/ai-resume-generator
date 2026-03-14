import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Fixed react-router to react-router-dom
import { Moon, Sun } from 'lucide-react';

function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'modern-dark');

    // Apply theme to HTML element
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'modern-dark' ? 'modern-light' : 'modern-dark');
    };

    return (
        <div className="shadow navbar bg-base-100 z-50 sticky top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/service">Services</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-bold tracking-tight">
                    <span className="text-primary">AI</span>Resume Builder
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="btn btn-circle btn-ghost"
                    aria-label="Toggle Theme"
                >
                    {theme === 'modern-light' ? (
                        <Moon className="w-5 h-5 text-base-content" />
                    ) : (
                        <Sun className="w-5 h-5 text-base-content" />
                    )}
                </button>
                <a className="btn btn-primary rounded-full px-6 shadow-md shadow-primary/20">Login</a>
            </div>
        </div>
    )
}

export default Navbar;