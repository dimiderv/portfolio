'use client'
import React from 'react';
import { technologies } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion from framer-motion for animations
import { useInView } from "react-intersection-observer"; // Import useInView hook
import { styles } from "@/styles";
import {textVariant} from "@/utils/motion";

const Technologies = () => {
    const { ref, inView } = useInView({ threshold: 0.5 }); // Use useInView hook to determine visibility

    return (
        <section ref={ref} id={'technologies'}>
            {/* Animation added to the section */}

                <motion.div className={'mb-14'} animate={{opacity: inView ? 1 : 0}} variants={textVariant()}>
                    <p className={`${styles.sectionSubText} text-center`}>
                        What do I know..
                    </p>
                    <h2 className={`${styles.sectionHeadText} text-center`}>
                        Skills.
                    </h2>
                </motion.div>

                <motion.div initial={{opacity: 0}} animate={{opacity: inView ? 1 : 0}} transition={{duration: 0.5}}>
                <div className={'flex flex-row flex-wrap justify-center gap-10 '}>
                    {technologies.map((technology, index) => (
                        <motion.div className={'w-28 h-28 flex  justify-center items-center'} key={technology.name}
                                    initial={{scale: 0}} animate={{scale: inView ? 1 : 0}}
                                    transition={{duration: 0.5, delay: inView ? index * 0.1 : 0}}>
                            {/* Animation added to each technology */}
                            <Image src={technology.icon} alt={technology.name} title={technology.name}/>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Technologies;


