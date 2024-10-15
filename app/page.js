import Link from "next/link";
import styles from "@/app/route-modules/home.css"

function Home() {
  return (
    <div className="start">
      <main>
        <div className='message'>
          <div className='message-header'>TEACHER. COMMUNITY LEADER. MENTOR.</div>
          <div className="quote-container">
            <div className='quote'>&quot;As a lifelong educator, credentialed counselor, former classified employee, and board trustee, I have served in education for over 20 years. <strong><u>Experience matters</u></strong> in this election, and I am the only candidate in this race with the educational background and experience needed to continue moving C-VUSD forward. It would be my honor to earn your vote and continue serving as your board representative for Trustee Area 5.&quot;
            <div className='signature'>— Trustee Maria Caceres</div>
          </div>
          </div>
        </div>
        <div className='about'>
            <div className='about-header'>About Maria</div>
            <div className='about-message'>
              <div>I have been a resident of the district for over 19 years. My family attended Grovecenter Elementary, Traweek Middle School, and graduated from Covina High School and South Hills High School.</div>
              <div>From a very early age, I dreamed of becoming a teacher and learned early on that an education would be the key to transforming my dream into a reality. After graduating from high school, I worked my way through college working with children with special needs. I am the first in my family to obtain a bachelor’s degree and two master’s degrees. I have had the honor of teaching grades 1,2,5,6,7 and 8th and this year I have the pleasure of teaching 7th/8th graders.</div>
              <div>My 20 years of experience as an educator has given me invaluable insights to the needs of students, parents, and school staff. As your current school board trustee, I have used my background and experience in education to be an effective and proactive leader.</div>
            </div>
        </div>
      </main>
    </div>

  );
}


export default Home;