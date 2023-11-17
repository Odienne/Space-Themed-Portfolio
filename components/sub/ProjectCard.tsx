"use client"

import Image from "next/image";

interface Props {
    src: string;
    title: string;
    description: string;
}

export default function ProjectCard({src, title, description}: Props) {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg border border-dash border-[#2a0e61]">
            <Image src={src} alt={title} width={1000} height={1000} className='w-full object-contain'/>

            <div className="relative p-4">
                <h1 className='text-2xl font-semi-bold text-white'>{title}</h1>
                <p className="mt-2 text-gray-300">{description}</p>
            </div>
        </div>
    )
}
