'use client'
import React, {useEffect, useRef} from 'react';
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {experiences} from "@/constants";
import {textVariant} from "@/utils/motion";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import {styles} from "@/styles";
import Image from "next/image";
import {SectionWrapper} from "@/hoc";
import { useInView } from "react-intersection-observer";
import ExperienceCard from "@/app/components/ExperienceCard";
// https://github.com/stephane-monnot/react-vertical-timeline/issues/171
// downgraded from "14.1.4" to 13.4.8


const WorkExperience = () => {
    return (
        <>
            <motion.div variants={textVariant()} id='experience'>
                <p  className={`${styles.sectionSubText} text-center`}>
                    What have I done so far..
                </p>
                <h2 className={`${styles.sectionHeadText} text-center`}>
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-20 flex flex-col'>
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(WorkExperience,'experiences');
// export default WorkExperience;