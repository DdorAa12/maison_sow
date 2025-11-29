import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="shadow-lg bg-transparent fixed top-0 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex-shrink-0"></div>

                    {/* Bouton mobile */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-transparent"
                    >
                        <FontAwesomeIcon icon={faPepperHot} className="text-red-700 text-xl" />
                    </button>

                    {/* Menu desktop */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <a href="/#product" className="text-red-700">Nos Produits</a>
                        </li>
                        <li>
                            <a href="/notre_histoire" className="text-red-700">Notre histoire</a>
                        </li>
                        <li>
                            <a href="/#contact" className="text-red-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 📱 OVERLAY (mobile uniquement) */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}

            {/* 📱 SIDEBAR MOBILE */}
            <div
                className={`
                    fixed top-0 left-0 h-full w-64 bg-white shadow-xl z-50 transform
                    ${isOpen ? "translate-x-0" : "-translate-x-full"}
                    transition-transform duration-300
                    md:hidden
                `}
            >
                <div className="p-4 border-b flex justify-between items-center">
                    <h2 className="text-xl font-bold text-red-700">Menu</h2>

                    <button
                        className="text-gray-700 text-2xl"
                        onClick={() => setIsOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <ul className="flex flex-col p-4 space-y-4">
                    <li>
                        <a
                            href="/#product"
                            className="text-red-700 text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Nos Produits
                        </a>
                    </li>

                    <li>
                        <a
                            href="/notre_histoire"
                            className="text-red-700 text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Notre histoire
                        </a>
                    </li>

                    <li>
                        <a
                            href="/#contact"
                            className="text-red-700 text-lg"
                            onClick={() => setIsOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
