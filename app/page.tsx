import Image from 'next/image'
import Hero from "@/components/main/Hero";
import StarsCanvas from "@/components/main/StarBackground";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Projects from "@/components/main/Projects";
import Footer from "@/components/main/Footer";

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                <Hero/>
                <Skills/>
                <Encryption/>
                <Projects/>
                <Footer/>
            </div>
        </main>
    )
}
