import react from "react";
import Link from "next/link";
import styles from '@/app/navigation/navstyles.css'

const Navbar = () => {
    return (
        <nav className="nav_bar">
            <div id='home'>
                <Link href="/">HOME</Link>
            </div>
            <Link className ='priorities' href="/priorities">PRIORITIES</Link>
            <Link className ='accomplishments' href="/accomplishments">ACCOMPLISHMENTS</Link>
            <Link className ='district' href="/district">DISTRICT 5</Link>
            <Link className ='contact' href="/contact">CONTACT US</Link>
            <Link className ='contribute' href="https://www.efundraisingconnections.com/c/CaceresforSchoolBoard2024 ">CONTRIBUTE</Link>
        </nav>
    )
}

export default Navbar;