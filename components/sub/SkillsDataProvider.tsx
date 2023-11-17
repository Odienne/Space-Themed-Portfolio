"use client";

import React from "react";
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import Image from "next/image";

interface Props {
    src: string;
    width: number;
    height: number;
    index: number;
}

export default function SkillsDataProvider({src, width, height, index}: Props) {
    const {ref, inView} = useInView({
        triggerOnce: true
    })

    const imageVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }

    const animationDelay = 0.3

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            variants={imageVariants}
            animate={inView ? "visible" : "hidden"}
            custom={index}
            transition={{delay: index * animationDelay}}
        >

            <Image src={src} alt="skill-image" width={width} height={height}/>
        </motion.div>


    )
}
