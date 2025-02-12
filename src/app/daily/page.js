import Image from "next/image";
import Link from "next/link";
import { franklinGothic } from "../../../styles/fonts";

export default function DailyTask() {
    return (
        <div className={`${franklinGothic.variable} font-franklin w-full h-full`}>
            <div className=" w-full h-full max-w-[500px] relative flex flex-col justify-stretch items-center bg-cover bg-no-repeat " >
                <div className="w-full h-[15%] bg-cover bg-no-repeat flex justify-center absolute top-0 " style={{ backgroundImage: `url(/image/side_bg.png)` }}></div>
                <div className={` w-[30vmax] max-w-[500px] relative `} >
                    {/* <Image
                        src="/image/dailytask_title.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    /> */}
                    <p className="w-full text-center text-[5vmax] sm:text-[4vmin] -rotate-2
        bg-gradient-to-r from-[#F92F2F] via-[#FEA5A5] to-[#EB1515] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] ">Daily Task</p>
                </div>
                <div className=" w-full flex flex-col items-start gap-[5vmin]">
                    <div className="w-[78vmin] sm:w-[22vmax] aspect-[518/105] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/dailyreward1.png"
                            alt="main logo"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[80vmin] sm:w-[22vmax] aspect-[520/105] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/dailyreward2.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                </div>
                <div className="w-[30vmax] max-w-[500px] relative ">
                    {/* <Image
                        src="/image/tasklist_title.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    /> */}
                    <p className="w-full text-center text-[5vmax] sm:text-[4vmin] -rotate-2
        bg-gradient-to-r from-[#2F80F9] via-[#A5D3FE] to-[#1527EB] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] ">Task List</p>
                </div>
                <div className=" w-full flex flex-col items-start gap-[5vmin]">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[520/108] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow1.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[520/105] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow2.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[520/105] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow3.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[520/105] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow4.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
