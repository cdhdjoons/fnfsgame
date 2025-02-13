'use client'
import Image from "next/image";
import '../../../styles/leaderboard.css';
import { franklinGothic } from "../../../styles/fonts";
import { useEffect, useState } from "react";


export default function LeaderBoard() {
    const rankerData = [
        { name: "ranker001", n2o: '5.6k' },
        { name: "ranker002", n2o: '5.1k' },
        { name: "ranker003", n2o: '4.5k' },
        { name: "ranker004", n2o: '4.0k' },
        { name: "ranker005", n2o: '3.7k' },
        { name: "ranker006", n2o: '3.4k' }
    ]
    const [n2o, setN2O] = useState(0);
    const [teleId, setTeleId] = useState('unknown')

    useEffect(() => {
        // 초기 n2o 값 불러오기
        const storedN2O = localStorage.getItem("n2o");
        if (storedN2O) {
            setN2O(Number(storedN2O));
        }
    }, []);

    useEffect(() => {
        // window.Telegram가 정상적으로 로드되었는지 확인
        const checkTelegramSDK = () => {
            if (typeof window !== 'undefined' && window.Telegram) {
                console.log('Telegram SDK Loaded:', window.Telegram); // 정상적으로 SDK 객체 확인
                // initData에서 사용자 ID 추출
                const initData = window.Telegram.WebApp.initData;

                if (initData) {
                    const userData = JSON.parse(initData);
                    const userId = userData.user.id; // 사용자 ID 추출
                    setTeleId(userId); // 상태에 저장
                    console.log('User ID:', userId);
                }
            } else {
                console.log('Telegram SDK is not loaded');
            }
        };

        // 딜레이를 주어 SDK가 로드된 후에 확인
        setTimeout(checkTelegramSDK, 1000); // 1초 후에 Telegram SDK 확인

    }, []);

    return (
        <div className=" w-full h-full">
            <div className=" w-full h-full max-w-[500px] pt-1 relative flex flex-col justify-evenly items-center bg-cover bg-no-repeat " >
                <div className="w-full h-[15%] bg-no-repeat bg-cover absolute top-0 " style={{ backgroundImage: `url(/image/side_bg.png)` }}></div>
                <div className="w-[65vmax] sm:w-[52vmin] rotate-[-18deg] aspect-[431/129] bg-no-repeat flex justify-start absolute top-[43%] " style={{ backgroundImage: `url(/image/thunder.png)` }}></div>
                <div className={` w-[32vmax] max-w-[500px] aspect-[260/42] relative ${franklinGothic.variable} font-franklin`}>
                    {/* <Image
                        src="/image/leaderboard_title.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    /> */}
                    <p className="w-full text-center text-[5vmax] sm:text-[6vmin] -rotate-2
        bg-gradient-to-r from-[#F92F2F] via-[#FEA5A5] to-[#EB1515] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] ">Leaderboard</p>
                </div>
                <div className=" w-full flex flex-col items-center py-[3vmin] ">
                    <div className="w-[79vmin] sm:w-[23vmax] aspect-[317/70] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/rankdesign_my.png"
                            alt="main logo"
                            layout="fill"
                            objectFit="cover"
                        />
                        <p className=" absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 text-black text-[6vmin] sm:text-[2.5vmin]">{teleId}</p>
                        <p className=" absolute right-2 top-1/2 -translate-y-1/2 text-black text-[5vmin] sm:text-[2.5vmin]">716</p>
                        <p className=" absolute bottom-2 right-1/3 translate-x-1/2 text-black text-[5vmin] sm:text-[1.8vmin]">{n2o}</p>
                    </div>
                </div>
                <p className=" text-white text-[12vmin] sm:text-[5vmin] z-10 [-webkit-text-stroke:1.3px_black]">145.1k Holders</p>
                <div className=" scroll-container w-full flex flex-col items-center max-h-[250px] sm:max-h-[500px] overflow-scroll overflow-x-hidden ">
                    {rankerData.map((ranker, index) => (
                        <div key={ranker.name} className="w-[79vmin] sm:w-[23vmax] aspect-[317/70] relative active:scale-90 transition-transform duration-200">
                            <Image
                                src="/image/rankdesign_ranker.png"
                                alt="main logo"
                                layout="fill"
                                objectFit="cover"
                            />
                            <p className=" absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-[4.2vmin] sm:text-[2.3vmin]">{ranker.name}</p>
                            <p className=" absolute right-2 top-1/2 -translate-y-1/2 text-[#ED9D6B] text-[5vmin] sm:text-[2.3vmin]">{`00${index + 1}`}</p>
                            <p className=" absolute bottom-2 right-1/3 translate-x-1/2 text-white text-[4vmin] sm:text-[1.6vmin]">{ranker.n2o}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
