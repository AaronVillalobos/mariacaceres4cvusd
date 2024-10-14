import Image from "next/image";
import styles from "@/app/route-modules/district.css";
import Link from "next/link";

function District() {
    return (
        <div className="Map">
            <main>
                <div className="map-container">
                    <div className="map-search">DO YOU LIVE IN TRUSTEE AREA 5?</div>
                    <div className="find-out">Find out below!</div>
                    <div className="map-pic">
                        <Image
                            className="district-5-map"
                            src="/images/district-5-map.png"
                            width = {700}
                            height = {700}
                            alt = 'District 5 map'
                        />
                    </div>
                    <div className="registration">
                        <div className="reminder">Voter registration deadline is October 21st.</div> <div className="click-link"><span className='vote-link'><Link href="https://registertovote.ca.gov/">Click here</Link></span> to register to vote or check your voter registration status.</div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default District;