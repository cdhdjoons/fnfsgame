'use client'

import Image from "next/image";
import Link from "next/link";
import { franklinGothic } from "../../../styles/fonts";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";

export default function DailyTask() {
    //task list 버튼 관리
    const [disabledTask, setDisabledTask] = useState([true, true, true, true]);


    useEffect(() => {
        // localStorage에서 버튼 상태 불러오기
        const storedState = localStorage.getItem("DisabledTask");
        if (storedState) {
            setDisabledTask(JSON.parse(storedState));
        }
    }, []);

    // task list 버튼 클릭 시 상태 업데이트 및 저장
    const handleClick = (index) => {
        const newState = [...disabledTask];
        newState[index] = false; // 클릭된 버튼 비활성화
        setDisabledTask(newState);
        localStorage.setItem("DisabledTask", JSON.stringify(newState)); // localStorage에 저장
    };

    //task list 링크 
    const links = ['https://x.com/Fnfs_Official', '#', 'https://t.me/fnfs_official', '/invite']

    return (
        <AnimatePresence mode="wait">
            <motion.div className={`${franklinGothic.variable} font-franklin w-full h-full`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <div className=" w-full h-full max-w-[500px] relative flex flex-col justify-evenly items-center bg-cover bg-no-repeat " >
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
                        <p className="w-full text-center text-[5vmax] sm:text-[4vmin] -rotate-2
        bg-gradient-to-r from-[#2F80F9] via-[#A5D3FE] to-[#1527EB] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] ">Task List</p>
                    </div>
                    <div className=" w-full flex flex-col items-start gap-[5vmin]">
                        {[...Array(4)].map((_, index) => (
                            disabledTask[index] ? (
                                links[index] !== "#" ? ( // 2번째 버튼은 <a> 태그 없이 렌더링
                                    <a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
                                        <div
                                            onClick={() => handleClick(index)}
                                            className="w-[79vmin] sm:w-[23vmax] aspect-[520/108] relative active:scale-90 transition-transform duration-200"
                                        >
                                            <Image
                                                src={`/image/follow${index + 1}.png`}
                                                alt={`button ${index + 1}`}
                                                layout="fill"
                                                objectFit="cover"
                                            />
                                        </div>
                                    </a>
                                ) : (
                                    <div
                                        key={index}
                                        onClick={(e) => e.preventDefault()} // 클릭해도 아무 동작 안 함
                                        className="w-[79vmin] sm:w-[23vmax] aspect-[520/108] relative active:scale-90 transition-transform duration-200"
                                    >
                                        <Image
                                            src={`/image/follow${index + 1}.png`}
                                            alt={`button ${index + 1}`}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                )
                            ) : (
                                <div
                                    key={index}
                                    className="w-[79vmin] sm:w-[23vmax] aspect-[520/108] relative active:scale-90 transition-transform duration-200"
                                >
                                    <Image
                                        src={`/image/usedfollow${index + 1}.png`}
                                        alt={`disabled button ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
