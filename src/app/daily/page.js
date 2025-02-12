import Image from "next/image";
import Link from "next/link";

export default function DailyTask() {
    return (
        <div className=" w-full h-full">
            <div className=" w-full h-full max-w-[500px] relative flex flex-col justify-evenly items-center bg-cover bg-no-repeat " >
                <div className="w-full h-[15%] bg-cover bg-no-repeat flex justify-center absolute top-0 " style={{ backgroundImage: `url(/image/side_bg.png)` }}></div>
                <div className="w-[30vmax] max-w-[206px] aspect-[206/45] relative ">
                    <Image
                        src="/image/dailytask_title.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    />
                    {/* <p className="w-full text-center text-[6vmax] sm:text-[6vmin] -rotate-2
        bg-gradient-to-r from-[#F9BC2F] via-[#FED9A5] to-[#EB9F15] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] ">Daily Task</p> */}
                </div>
                <div className=" w-full flex flex-col items-start py-[3vmin] gap-[5vmin]">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[347/70] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/dailyreward1.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[80vmin] sm:w-[24vmax] aspect-[347/70] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/dailyreward2.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                </div>
                <div className="w-[30vmax] max-w-[180px] aspect-[180/38] relative ">
                    <Image
                        src="/image/tasklist_title.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className=" w-full flex flex-col items-start py-[3vmin] gap-[5vmin]">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[347/72] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow1.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[347/70] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow2.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[347/70] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/follow3.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </a>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <div className="w-[79vmin] sm:w-[23vmax] aspect-[347/70] relative active:scale-90 transition-transform duration-200">
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
