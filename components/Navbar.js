"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: "/", label: "Weather" },
        { href: "/dashboard", label: "Dashboard" },
        { href: "/about", label: "About" },
        { href: "/login", label: "Login" },
    ];

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-blue-800 sticky top-0 z-50 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <Link href="/" className="text-white text-xl font-bold tracking-tight">
                    Weather App
                </Link>
                <ul className="flex items-center gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`text-white/90 hover:text-white transition-colors duration-200 ${
                                    pathname === link.href
                                        ? "font-semibold border-b-2 border-white"
                                        : ""
                                }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
