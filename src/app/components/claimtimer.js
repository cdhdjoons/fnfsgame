"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function ClaimTimer() {
    const [time, setTime] = useState(10); // 10초 타이머
    const [onClaim, setOnClaim] = useState(true);
    const [n2o, setN2O] = useState(0);
    const timerRef = useRef(null);
    const hasFinished = useRef(false);
    

    useEffect(() => {
        // localStorage에서 시작 시간 불러오기
        const storedStartTime = localStorage.getItem("timerStartTime");

        if (storedStartTime) {
            const elapsedTime = Math.floor((Date.now() - Number(storedStartTime)) / 1000);
            const remainingTime = Math.max(10 - elapsedTime, 0);

            if (remainingTime > 0) {
                setTime(remainingTime);
                setOnClaim(false);
                startTimer(remainingTime); // 남은 시간만큼 타이머 시작
            } else {
                localStorage.removeItem("timerStartTime"); //시간 지나면 초기화
            }
        }

         // 초기 n2o 값 불러오기
         const storedN2O = localStorage.getItem("n2o");
         if (storedN2O) {
             setN2O(Number(storedN2O));
         }
    }, []);

    const startTimer = (initialTime = 10) => {
        const safeTime = Number(initialTime) || 10; // 🔥 NaN 방지
        setOnClaim(false);
        setTime(safeTime - 1);        
        localStorage.setItem("timerStartTime", Date.now().toString());

        if (timerRef.current) {
            clearInterval(timerRef.current);
        }

        timerRef.current = setInterval(() => {
            setTime((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    setOnClaim(true);
                    localStorage.removeItem("timerStartTime"); // 🔥 타이머 종료 시 localStorage 초기화
                    if (!hasFinished.current) {  // 타이머 종료 후 한 번만 실행
                        handleN2O();  // N2O 값 갱신
                        hasFinished.current = true; // 종료 여부 상태 설정
                    }
                    return 10; // 🔥 10초로 리셋
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleN2O = () => {
        const currentN2O = localStorage.getItem("n2o");
        const newN2O = (Number(currentN2O) || 0) + 1000; // 🔥 기존 값에 1000 더함
        localStorage.setItem("n2o", newN2O); // 🔥 업데이트된 값 저장
        setN2O(newN2O); // 🔥 상태 업데이트
        console.log("새로운 n2o 값:", newN2O); // 🔥 새로 저장된 n2o 값 확인
    };


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
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className=" aspect-[272/47] absolute left-0 h-full bg-cover bg-no-repeat w-full opacity-55 transition-all duration-1000 z-10  " 
                    style={{
                        width: progressWidth,
                        backgroundImage: `url(/image/orangeBar.png)`
                      }}>
                    
                    </div>
                    <Image
                        src="/image/progressBar.png"
                        alt="main logo"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <p className=" absolute top-[-20px] right-0 text-white text-[2.2vmax] sm:text-[1.3vmax] [-webkit-text-stroke:1.5px_black]">{formatTime(time)}</p>
                    <p className=" z-50 absolute w-full text-center top-1/2 -translate-y-1/2 text-white text-[1.8vmax] sm:text-[1.5vmin] [-webkit-text-stroke:1px_black]">Farming 1000 N2O</p>

                </div>
            </div>
            <div className="w-full flex justify-center items-center relative">
                <Link href="/balance">
                    <div className="w-[30vmax] max-w-[235px] aspect-[235/235] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/balancebtn.png"
                            alt="main logo"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <p className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[3.5vmax] sm:text-[2.2vmax]
             [-webkit-text-stroke:2px_black]">{n2o}</p>
                    </div>
                </Link>
            </div>
            {onClaim ? <div onClick={startTimer} className="w-full flex justify-center items-center relative ">
                <div className="w-[30vmax] sm:w-[20vmax] aspect-[297/79] relative">
                    <Image
                        src="/image/claimIcon.png"
                        alt="main logo"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div> : <div className="w-full flex justify-center items-center relative ">
                <div className="w-[30vmax] sm:w-[20vmax] aspect-[297/79] relative">
                    <Image
                        src="/image/claimover.png"
                        alt="main logo"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
            </div>}

        </div>
    );
};

