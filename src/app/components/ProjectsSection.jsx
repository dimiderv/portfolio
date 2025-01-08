"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/hoc/SectionWrapper";

const projectsData = [
    {
        id: 1,
        title: "Security Alliance",
        description: "Security Alliance website",
        image: "/images/projects/security-alliance.png",
        tag: ["All", "Web"],
        gitUrl: "https://securityalliance.org/#",
        previewUrl: "https://securityalliance.org/#",
    },
    {
        id: 2,
        title: "Crypto Search",
        description: "Crypto search website using CoinGecko API",
        image: "/images/projects/crypto-search3.png",
        tag: ["All", "Web"],
        gitUrl: "https://dimiderv.github.io/crypto-app",
        previewUrl: "https://dimiderv.github.io/crypto-app",
    },
    {
        id: 3,
        title: "MovieDB",
        description: "A MovieDB website for users to share their favorites movies.",
        image: "/images/projects/movieDB.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/dimiderv/MERN_MovieRatingSite/tree/reduxBranch",
        previewUrl: "https://moviedb-frontend-76tj.onrender.com/",
    },
    {
        id: 4,
        title: "Traceability on Hyperledger Fabric ",
        description: "Traceability in a food supply chain using Hyperledger Fabric.",
        image: "/images/projects/traceability.png",
        tag: ["All", "Blockchain"],
        gitUrl: "https://github.com/dimiderv/Traceability_SupplyChain",
        previewUrl: "https://github.com/dimiderv/Traceability_SupplyChain",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

    return (
        <section id="projects" className={'mt-16'}>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag
                    onClick={handleTagChange}
                    name="All"
                    isSelected={tag === "All"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Web"
                    isSelected={tag === "Web"}
                />
                <ProjectTag
                    onClick={handleTagChange}
                    name="Blockchain"
                    isSelected={tag === "Blockchain"}
                />
            </div>
            <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

// export default SectionWrapper(ProjectsSection,'project');
export default ProjectsSection;