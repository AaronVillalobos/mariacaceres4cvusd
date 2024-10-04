import react from "react";
import Link from "next/link";
import styles from '@/app/navigation/navstyles.css'

const Navbar = () => {
    return (
        <nav className="nav_bar">
            <div id='home'>
                <Link href="/">Home </Link>
            </div>
            <Link className ='about' href="/about">About</Link>
            <Link className ='priorities' href="/priorities">Priorities</Link>
            <Link className ='accomplishments' href="/accomplishments">Accomplishments</Link>
            <Link className ='district' href="/district">District 5</Link>
            <Link className ='contact' href="/contact">Contact Us</Link>
            <Link className ='contribute' href="/contribute">Contribute</Link>
        </nav>
    )
}

export default Navbar;