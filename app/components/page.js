import styles from "@/app/route-modules/home.css"
import Image from "next/image";

const Cover = () => {
    return (
        <div className='opening-background'>
          <div className='layer'>
            <div className='logo-placeholder'>
              <Image
                className='logo'
                src='/images/MCaceres 20L-01 Logo_primary_fnl.png'
                height={350}
                width={350}
                alt='MC Logo'
              />
            </div>
            <div className='profile-placeholder'>
              <Image
                className='profile'
                src='/images/IMG_6544.JPG'
                height={430}
                width={430}
                alt='Profile'
              />
            </div>
          </div>
        </div>
    );
}

export default Cover;
