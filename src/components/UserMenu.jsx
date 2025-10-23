import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

export default function UserMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const isLoggedIn = true;

    return (
        <div className="relative inline-block text-left w-fit">
            {/* Icono del usuario */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center focus:outline-none"
            >
                <FaUserCircle className="text-2xl text-gray-700 hover:text-blue-500 transition duration-200" />
            </button>

            {/* Mini menú */}
            {isOpen && (
                <div
                    className="absolute right-0 mt-2 w-28 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black/5 transition-all duration-200 z-50"
                >
                    <div className="py-1 flex flex-col">
                        {isLoggedIn ? (
                            <>
                                <Link
                                    to="/"
                                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500 rounded-md transition duration-150"
                                >
                                    Edit Profile
                                </Link>
                                <Link
                                    to="/"
                                    className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500 rounded-md transition duration-150"
                                >
                                    Sign Out
                                </Link>
                            </>
                        ) : (
                            <Link
                                to="/"
                                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500 rounded-md transition duration-150"
                            >
                                Sign In
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
