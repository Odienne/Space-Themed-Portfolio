import {RxDiscordLogo, RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo} from "react-icons/rx"
import {FaYoutube} from "react-icons/fa"

export default function Footer() {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Community
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube/>
                            <span className="text-[15px] ml-3">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo/>
                            <span className="text-[15px] ml-3">Youtube</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo/>
                            <span className="text-[15px] ml-3">Youtube</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            Social Media
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo/>
                            <span className="text-[15px] ml-3">Instagram</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo/>
                            <span className="text-[15px] ml-3">Twitter</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo/>
                            <span className="text-[15px] ml-3">Linkedin</span>
                        </p>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">
                            About
                        </div>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px]">Become sponsor</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px]">Learning about me</span>
                        </p>
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px]">adam@digitalis-studio.fr</span>
                        </p>
                    </div>
                </div>

                <div className="mt-10 mb-[20px] text-[15px] text-center">
                    &copy; Digitalis Studio 2023 All Rights Reserved
                </div>
            </div>
        </div>
    )
}
