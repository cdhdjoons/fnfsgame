"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ClaimTimer() {
    const [time, setTime] = useState(10); // 10초 타이머
    const [onClaim, setOnClaim] = useState(true);

    const startTimer = () => {

        if (time === 0) {
            setTime(10)
            setOnClaim(true)
            return;
        } // 0이면 종료

        setOnClaim(false); // ✅ 타이머 시작 시 setOnClaim(false)

        const timer = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) { // 1 이하일 때 멈추고 0으로 설정
                    clearInterval(timer)
                    setOnClaim(true)
                    setTime(10)

                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);

    }

    // 초를 "00:00:XX" 형식으로 변환
    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `00:${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
    };

    // 프로그레스 바 너비 계산 (0% ~ 100%)
    const progressWidth = `${((11 - time) / 10) * 100}%`;

    // 시간에 따른 색상 변화 (rgba 값으로)
    const progressColor = `rgba(245, 133, 47, 0.4)`; // 초록색에서 투명도로 변화

    return (
        <div className=" flex flex-col gap-[3vmax]">

            <div className="w-full flex justify-center items-center relative">
                <div className="w-[30vmax] max-w-[272px] aspect-[272/47] relative">
                    <div className=" absolute w-[30%] -top-1/2 translate-y-[8%] -left-1/4 translate-x-1/2 aspect-[65/68] z-20 ">
                        <Image
                            src="/image/n2o_Icon.png"
                            alt="main logo"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="  absolute left-0 h-full w-full opacity-55 transition-all duration-1000 z-10  " 
                    style={{
                        width: progressWidth,
                        backgroundImage: `url(/image/orangeBar.png)`
                      }}>
                    
                    </div>
                    <Image
                        src="/image/progressBar.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    />
                    <p className=" absolute top-[-20px] right-0 text-white text-[2.2vmax] sm:text-[1.3vmax] [-webkit-text-stroke:1.5px_black]">{formatTime(time)}</p>
                </div>
            </div>
            <div className="w-full flex justify-center items-center relative">
                <Link href="/balance">
                    <div className="w-[30vmax] max-w-[235px] aspect-[235/235] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/balancebtn.png"
                            alt="main logo"
                            layout="fill"
                            objectFit="cover"
                        />
                        <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[3.5vmax] sm:text-[2.2vmax]
             [-webkit-text-stroke:2px_black]">000000</p>
                    </div>
                </Link>
            </div>
            {onClaim ? <div onClick={startTimer} className="w-full flex justify-center items-center relative ">
                <div className="w-[30vmax] sm:w-[20vmax] aspect-[297/79] relative">
                    <Image
                        src="/image/claimIcon.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div> : <div className="w-full flex justify-center items-center relative ">
                <div className="w-[30vmax] sm:w-[20vmax] aspect-[297/79] relative">
                    <Image
                        src="/image/claimover.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>}

        </div>
    );
};

