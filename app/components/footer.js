import Image from "next/image"
import styles from '@/app/navigation/footer.css'
import Link from "next/link";

const Footer = () => {
    return (
        <div className='footer'>
            <footer className='main-footer'>
                <div className='paid-for'>Paid for by Caceres for School Board 2024</div>
                <Image
                    className='logo'
                    src='/images/MCaceres 20L-01 Logo_primary_fnl.jpg'
                    height={150}
                    width={150}
                    alt='MC Logo'
                />
                <Link href='https://www.instagram.com/maria_m_caceres_4_cvusd_area_5/'>
                    <Image
                        className='insta'
                        src='/images/insta-logo.png'
                        height={25}
                        width={25}
                        alt='Instagram'
                    />
                </Link>
            </footer>
        </div>
    )
}

export default Footer;