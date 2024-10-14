import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Layout from "../navigation/layout";
import react from "react";
import styles from "@/app/route-modules/accomplishments.css"

function Accomplishments() {
    return (
        <div className="accomplishment">
            <main>
                <div className="accomplishment-header">A TEACHER WHO DELIVERS RESULTS</div>
                <div className='accomplishment-section'>
                    <div className='accomplishment-open'>Since 2020, I along with my colleagues, have worked on: </div>
                    <div className='groups'>
                        <div className='group-1'>
                            <div className="accomp-panel">
                                <div className='accomp-title'>SUPPORTING A BALANCED BUDGET</div>
                                <ul className='accomp-lists'>
                                    <li><span className='accomp'>Zero staff layoffs,</span> despite a decline of 373 students from the 2019-20 to 2023-24 school year.</li>
                                    <li><span className='accomp'>Salary increases</span> for teachers and staff that are on-schedule.</li>
                                    <li><span className='accomp'>Set aside approximately 6%</span> of the annual budget into a Special Reserve Fund for economic uncertainty.</li>
                                    <li><span className='accomp'>Created a revenue stream</span> for facility improvements by recently purchasing property.</li>
                                    <li><span className='accomp'>No audit findings or adjustments</span> since fiscal year 2021-22, which highlights C-VUSD’s strong fiscal solvency as most districts will have 1-2 items each year.</li>
                                </ul>
                            </div>
                            <div className="accomp-panel">
                                <div className='accomp-title'>IMPROVING SCHOOL FACILITIES</div>
                                    <ul className='accomp-lists'>
                                        <li><span className='accomp'>Construction</span> of new Covina High School Aquatic Center.</li>
                                        <li><span className='accomp'>Renovated HVAC systems</span> at all elementary schools with state-of-the-art air filtration.</li>
                                        <li><span className='accomp'>Installation of HVAC systems</span> at all elementary school cafeterias.</li>
                                        <li><span className='accomp'>Renovated</span> South Hills High School Library.</li>
                                        <li><span className='accomp'>Projects to renovate</span> roofing district-wide.</li>
                                        <li><span className='accomp'>Updated flooring</span> for the cafeteria at Covina High School, Northview High School, and South Hills High School.</li>
                                        <li><span className='accomp'>Installation of concrete basketball and volleyball courts</span> at Traweek Middle School.</li>
                                        <li><span className='accomp'>Remodeled</span> all high school Medical Pathway classrooms.</li>
                                    </ul>
                            </div>
                            <div className="accomp-panel">
                                <div className='accomp-title'>INVESTING IN MENTAL HEALTH SERVICES</div>
                                <ul className='accomp-lists'>
                                    <li><span className='accomp'>Employing counselors</span> at every elementary school.</li>
                                    <li><span className='accomp'>Employing an additional counselor</span> at each middle school.</li>
                                    <li><span className='accomp'>Employing five social workers</span> district-wide.</li>
                                    <li><span className='accomp'>Employing a counselor</span> that solely focuses on mental health at each high school.</li>
                                    <li><span className='accomp'>Opening of wellness centers</span> at all school sites.</li>
                                    <li><span className='accomp'>Partnering with Yale University’s Center</span> for Emotional Intelligence to train C-VUSD staff and promote social-emotional learning.</li>
                                </ul>
                            </div>
                        </div>
                        <div className='group-2'>
                            <div className="accomp-panel">
                                <div className='accomp-title'>MAKING SCHOOLS SAFE</div>
                                <ul className='accomp-lists'>
                                    <li><span className='accomp'>Safely reopened schools</span> after COVID-19.</li>
                                    <li><span className='accomp'>Approved the CENTEGIX CrisisAlert System,</span> allowing staff to quickly respond to emergencies and alert administrators and first responders with precise location.</li>
                                    <li><span className='accomp'>Employed School Resource Officers</span> at every high school.</li>
                                </ul>
                            </div>
                            <div className="accomp-panel">
                                <div className='accomp-title'>ENSURING ACADEMIC EXCELLENCE</div>
                                    <ul className='accomp-lists'>
                                        <li><span className='accomp'>C-VUSD ranked #6</span> in the California Reading Report Card, ensuring students can read at their grade level by the third grade.</li>
                                        <li><span className='accomp'>Established an Early College High School</span> on campus at Covina High School by expanding the dual enrollment program.</li>
                                        <li><span className='accomp'>Created more career opportunities,</span> including the Aviation and Cosmetology Career Pathways.</li>
                                    </ul>
                            </div>
                            <div className="accomp-panel">
                                <div className='accomp-title'>BUILDING COMMUNITY ENGAGEMENT</div>
                                <ul className='accomp-lists'>
                                    <li><span className='accomp'>Implemented Student Board Members</span> to address student issues and hear their voices.</li>
                                    <li><span className='accomp'>Established the first ever “State of the District” event</span> to keep the community informed.</li>
                                    <li><span className='accomp'>Approved free wrestling league</span> for all middle school students.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>   
            </main>
        </div>
    );
}

export default Accomplishments;

