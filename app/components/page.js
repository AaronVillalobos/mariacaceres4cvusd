import styles from "@/app/route-modules/home.css"
import Image from "next/image";

const Cover = () => {
    return (
      <main>
        <div className='opening-background'>
          <div className="layer">
            <div className="placeholders">
              <div className="logo-placeholder">
                <Image
                  src="/images/MCaceres 20L-01 Logo_primary_fnl.png"
                  height={400}
                  width={400}
                  alt='Maria Caceres for C-VUSD Logo'
                />
              </div>
              <div className="pic-placeholder">
                <Image
                  src="/images/IMG_6544.JPG"
                  height={400}
                  width={400}
                  alt='Maria Caceres'
                />
              </div>
            </div>
          </div>  
        </div>
      </main>
    );
}

export default Cover;
