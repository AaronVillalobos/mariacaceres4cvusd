import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Layout from "../navigation/layout";
import react from "react";
import styles from "@/app/route-modules/accomplishments.css"

function Accomplishments() {
    return (
        <div className="accomplishment">
            <main>
                <div className="accomplishment-title">A TEACHER WHO DELIVERS RESULTS</div>
                <div className='accomplishment-section'>
                    <div className='accomplishment-open'>Since 2020, I along with my colleagues, have worked on: </div>
                    <div className="disclosures">
                        <Disclosure>
                            <DisclosureButton className='py-2'>SUPPORTING A BALANCED BUDGET</DisclosureButton>
                            <DisclosurePanel className='lists'>
                            <p><span className='highlight'>Zero staff layoffs</span>, despite a decline of 373 students from the 2019-20 to 2023-24 school year.</p>
                            <p><span className='highlight'>Salary increases</span> for teachers and staff that are on-schedule</p>
                            <p><span className='highlight'>Set aside approximately 6%</span> of the annual budget into a Special Reserve Fund for economic uncertainty</p>
                            <p><span className='highlight'>Created a revenue stream</span> for facility improvements by recently purchasing property</p>
                            <p><span className='highlight'>No audit findings or adjustments</span> since fiscal year 2021-22, which highlights C-VUSD’s strong fiscal solvency as most districts will have 1-2 items each year</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure>
                            <DisclosureButton className='py-2'>ENSURING ACADEMIC EXCELLENCE</DisclosureButton>
                            <DisclosurePanel className='lists'>
                                <p ><span className='highlight'> C-VUSD ranked #6</span> in the California Reading Report Card, ensuring students can read at their grade level by the third grade</p>
                                <p><span className='highlight'> Established an Early College High School</span> on campus at Covina High School by expanding the dual enrollment program</p>
                                <p><span className='highlight'>Created more career opportunities,</span> including the Aviation and Cosmetology Career Pathways</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure>
                            <DisclosureButton className='py-2'>INVESTING IN MENTAL HEALTH SERVICES</DisclosureButton>
                            <DisclosurePanel className='lists'>
                                <p><span className='highlight'>Employing counselors</span> at every elementary school</p>
                                <p><span className='highlight'>Employing an additional counselor</span> at each middle school</p>
                                <p><span className='highlight'>Employing five social workers</span> district-wide</p>
                                <p><span className='highlight'>Employing a counselor</span> that solely focuses on mental health at each high school</p>
                                <p><span className='highlight'>Opening of wellness centers</span> at all school sites</p>
                                <p><span className='highlight'>Partnering with Yale University’s Center</span> for Emotional Intelligence to train C-VUSD staff and promote social-emotional learning</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure>
                            <DisclosureButton className='py-2'>MAKING SCHOOLS SAFE</DisclosureButton>
                            <DisclosurePanel className='lists'>
                                <p><span className='highlight'>Safely reopened schools</span> after COVID-19</p>
                                <p><span className='highlight'>Approved the CENTEGIX CrisisAlert System,</span> allowing staff to quickly respond to emergencies and alert administrators and first responders with precise location</p>
                                <p><span className='highlight'>Employed School Resource Officers</span> at every high school</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure>
                            <DisclosureButton className='py-2'>IMPROVING SCHOOL FACILITIES</DisclosureButton>
                            <DisclosurePanel className='lists'>
                                <p><span className='highlight'>Construction</span> of new Covina High School Aquatic Center</p>
                                <p><span className='highlight'>Renovated HVAC systems</span> at all elementary schools with state-of-the-art air filtration</p>
                                <p><span className='highlight'>Installation of HVAC systems</span> at all elementary school cafeterias</p>
                                <p><span className='highlight'>Renovated</span> South Hills High School Library</p>
                                <p><span className='highlight'>Projects to renovate</span> roofing district-wide</p>
                                <p><span className='highlight'>Updated flooring</span> for the cafeteria at Covina High School, Northview High School, and South Hills High School</p>
                                <p><span className='highlight'>Installation of concrete basketball</span> and volleyball courts at Traweek Middle School</p>
                                <p><span className='highlight'>Remodeled</span> all high school Medical Pathway classrooms</p>
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure>
                            <DisclosureButton className='py-2'>BUILDING COMMUNITY ENGAGEMENT</DisclosureButton>
                            <DisclosurePanel className='lists'>
                                <p><span className='highlight'>Implemented Student Board Members</span> to address student issues and hear their voices</p>
                                <p><span className='highlight'>Established the first ever “State of the District” </span>event to keep the community informed</p>
                                <p><span className='highlight'>Approved free wrestling league</span> for all middle school students</p>
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
                
            </main>
        </div>
    );
}

export default Accomplishments;