"use client"

import ProjectCard from "@/components/sub/ProjectCard";

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col items-center justify-center py-20 mt-10">
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
                <ProjectCard src="/NextWebsite.png" title="Modern Next.js Portfolio" description={"Modern Next.js Portfolio project details"}/>
                <ProjectCard src="/CardImage.png" title="Interactive Website Cards" description={"Interactive Website Cards project details"}/>
                <ProjectCard src="/SpaceWebsite.png" title="Space themed website" description={"Space themed website project details"}/>
            </div>
        </div>
    )
}
