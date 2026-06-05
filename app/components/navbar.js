import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-links">
                <li><Link href="/">Weather</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contacts">Contacts</Link></li>
            </ul>
        </nav>
    );
}