import Image from "next/image";

function District() {
    return (
        <div className="Map">
            <main>
                <div className="map-search">Do you live in Trustee Area 5?</div>
                <p>Find out Below</p>
                <Image
                    className="district-5-map"
                    src="/images/district-5-map.png"
                    width = {700}
                    height = {700}
                    alt = 'District 5 map'
                />
            </main>
        </div>
    )
}

export default District;