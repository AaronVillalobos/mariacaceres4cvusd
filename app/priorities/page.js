import Layout from "../navigation/layout";
import react from "react";
import styles from '@/app/route-modules/priorities.css'

function Priorities() {
    return (
        <main>
            <div className={styles.priorities}>
                <div className='priorities-title'>MARIA&apos;S PLAN FOR C-VUSD</div>
                <div className='plans'>
                    <ul className='plan-lists'>
                        <li><span className='highlights'>Continue supporting a balanced budget</span> that is accountable to taxpayers while ensuring that we meet the needs of students, teachers, and staff.</li>
                        <li><span className='highlights'>Continue investing in technology and training</span> that provide teachers the tools they need to enhance student learning in the classroom.</li>
                        <li><span className='highlights'>Continue prioritizing school safety</span> by expanding access to mental health programs and investing in school resource officers with the resources they need to keep campuses secure.</li>
                        <li><span className='highlights'>Continue building partnerships</span> that give a voice to the community by strengthening outreach efforts between parents and the district.</li>
                    </ul>
                </div>
            </div>

        </main>
    );
}
export default Priorities;