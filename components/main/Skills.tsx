import Image from 'next/image'
import SkillsDataProvider from "@/components/sub/SkillsDataProvider";
import {Backend_skill, Frontend_skill, Full_stack, Other_skill, Skill_data} from "@/constants";
import SkillText from "@/components/sub/SkillText";

export default function Skills() {
    return (
        <section id="skills"
                 className="flex flex-col items-center justify-between gap-3 h-full relative overflow-hidden py-20 pb-80"
                 style={{transform: 'scale(0.9)'}}>
            <SkillText/>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Skill_data.map((image, index) => (
                    <SkillsDataProvider key={index} index={index} src={image.Image} width={image.width}
                                        height={image.height}/>
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Frontend_skill.map((image, index) => (
                    <SkillsDataProvider key={index} index={index} src={image.Image} width={image.width}
                                        height={image.height}/>
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Backend_skill.map((image, index) => (
                    <SkillsDataProvider key={index} index={index} src={image.Image} width={image.width}
                                        height={image.height}/>
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Full_stack.map((image, index) => (
                    <SkillsDataProvider key={index} index={index} src={image.Image} width={image.width}
                                        height={image.height}/>
                ))}
            </div>
            <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                {Other_skill.map((image, index) => (
                    <SkillsDataProvider key={index} index={index} src={image.Image} width={image.width}
                                        height={image.height}/>
                ))}
            </div>

            <div className="w-full h-full absolute">
                <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
                    <video className="w-full h-auto" preload="false" playsInline autoPlay muted loop src="/cards-video.webm"/>
                </div>
            </div>

        </section>
    )
}
