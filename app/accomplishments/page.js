import Layout from "../navigation/layout";
import react from "react";

function Accomplishments() {
    return (
        <div className="accomplishment">
            <main>
                <div className="accomplishment-title">A Teacher Who Delivers Results</div>
                <div className="accomp-list">
                    <p>Since being elected in 2020, I along with my colleagues have worked on:</p>
                    <dl>
                        <dt>Supporting a balanced budget</dt>
                        <dd>- Zero staff layoffs, despite a decline of 373 students from the 2019-20 to 2023-24 school year.</dd>
                        <dd>- Salary increases for teachers and staff that are on-schedule </dd>
                        <dd>- Set aside approximately 6% of the annual budget into a Special Reserve Fund for economic uncertainty </dd>
                        <dd>- Created a revenue stream for facility improvements by recently purchasing property</dd>
                        <dd>- No audit findings or adjustments since fiscal year 2021-22, which highlights C-VUSD’s strong fiscal solvency as most districts will have 1-2 items each year </dd>
                    </dl>
                    <dl>
                        <dt>Ensuring Academic Excellence</dt>
                        <dd>- C-VUSD ranked #6 in the California Reading Report Card, ensuring students can read at their grade level by the third grade </dd>
                        <dd>- Established an Early College High School on campus at Covina High School by expanding the dual enrollment program </dd>
                        <dd>- Created more career opportunities, including the Aviation and Cosmetology Career Pathways</dd>
                    </dl>
                    <dl>
                        <dt>Investing in Mental Health Services</dt>
                        <dd>- Employing counselors at every elementary school </dd>
                        <dd>- Employing an additional counselor at each middle school</dd>
                        <dd>- Employing five social workers district-wide</dd>
                        <dd>- Employing a counselor that solely focuses on mental health at each high school</dd>
                        <dd>- Opening of wellness centers at all school sites </dd>
                        <dd>- Partnering with Yale University’s Center for Emotional Intelligence to train C-VUSD staff and promote social-emotional learning </dd>
                    </dl>
                    <dl>
                        <dt>Making Schools Safe</dt>
                        <dd>- Safely reopened schools after COVID-19</dd>
                        <dd>- Approved the CENTEGIX CrisisAlert System, allowing staff to quickly respond to emergencies and alert administrators and first responders with precise location</dd>
                        <dd>- Employed School Resource Officers at every high school </dd>
                    </dl>
                    <dl>
                        <dt>Improving School Facilities</dt>
                        <dd>- Construction of new Covina High School Aquatic Center</dd>
                        <dd>- Renovated HVAC systems at all elementary schools with state-of-the-art air filtration</dd>
                        <dd>- Installation of HVAC systems at all elementary school cafeterias </dd>
                        <dd>- Renovated South Hills High School Library</dd>
                        <dd>- Projects to renovate roofing district-wide </dd>
                        <dd>- Updated flooring for the cafeteria at Covina High School, Northview High School, and South Hills High School</dd>
                        <dd>- Installation of concrete basketball and volleyball courts at Traweek Middle School </dd>
                        <dd>- Remodeled all high school Medical Pathway classrooms</dd>
                    </dl>
                    <dl>
                        <dt>Building Community Engagement</dt>
                        <dd>- Implemented Student Board Members to address student issues and hear their voices </dd>
                        <dd>- Established the first ever “State of the District” event to keep the community informed </dd>
                        <dd>- Approved free wrestling league for all middle school students</dd>
                    </dl>
                </div>
            </main>
        </div>
    );
}

export default Accomplishments;