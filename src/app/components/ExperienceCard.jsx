'use client'
import {VerticalTimelineElement} from "react-vertical-timeline-component";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import "react-vertical-timeline-component/style.min.css";
export default function  ExperienceCard ({ experience })  {
    const { ref, inView } = useInView({
        triggerOnce: false,
    });

    return (
        // <span ref={ref}>
        <>
        <VerticalTimelineElement

            contentStyle={{
                background: "#1d1836",
                color: "#fff",

            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
                <div  className='flex justify-center items-center w-full h-full'>
                    <Image
                        src={experience.icon}
                        alt={experience.company_name}
                        className='w-[80%] h-[80%] object-contain'
                    />
                </div>
            }
            visible={inView}
        >
            <div  ref={ref}>

                <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
                <p
                    className='text-secondary text-[16px] font-semibold'
                    style={{ margin: 0 }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-white-100 text-[14px] pl-1 tracking-wider'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
         {/*// </span>*/}
        </>
    );
};