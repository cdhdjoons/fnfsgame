import Image from "next/image";
import '../../../styles/leaderboard.css';


export default function LeaderBoard() {
    const rankerData = [
        { name: "ranker001", n2o: '5.6k' },
        { name: "ranker002", n2o: '5.1k' },
        { name: "ranker003", n2o: '4.5k' },
        { name: "ranker004", n2o: '4.0k' },
        { name: "ranker005", n2o: '3.7k' },
        { name: "ranker006", n2o: '3.4k' }
    ]
    return (
        <div className=" w-full h-full">
            <div className=" w-full h-full max-w-[500px] pt-3 relative flex flex-col justify-evenly items-center bg-cover bg-no-repeat " >
                <div className="w-full h-[15%] bg-no-repeat bg-cover absolute top-0 " style={{ backgroundImage: `url(/image/side_bg.png)` }}></div>
                <div className="w-[65vmax] sm:w-[52vmin] rotate-[-18deg] aspect-[431/129] bg-no-repeat flex justify-start absolute top-[43%] " style={{ backgroundImage: `url(/image/thunder.png)` }}></div>
                <div className="w-[32vmax] max-w-[260px] aspect-[260/42] relative ">
                    <Image
                        src="/image/leaderboard_title.png"
                        alt="main logo"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className=" w-full flex flex-col items-center py-[3vmin] ">
                    <div className="w-[79vmin] sm:w-[23vmax] aspect-[317/70] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/rankdesign_my.png"
                            alt="main logo"
                            layout="fill"
                            objectFit="cover"
                        />
                        <p className=" absolute left-1/3 -translate-x-1/2 top-1/2 -translate-y-1/2 text-black text-[6vmin] sm:text-[2.5vmin]">My ID</p>
                        <p className=" absolute right-2 top-1/2 -translate-y-1/2 text-black text-[5vmin] sm:text-[2.5vmin]">716</p>
                        <p className=" absolute bottom-2 right-1/3 translate-x-1/2 text-black text-[5vmin] sm:text-[1.8vmin]">1.0k</p>
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
