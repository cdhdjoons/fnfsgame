import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="  w-full max-w-[500px] h-[102px] flex justify-center items-center ">
            <div className=" w-full flex justify-evenly items-center bg-footerBg py-2">
                <Link href="/daily">
                    <div className="w-[60px] h-[61px] relative active:scale-90 transition-transform duration-200 ">
                        <Image
                            src="/image/menu-task.png"
                            alt="meatIcon"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Link>
                <Link href="/">
                    <div className="w-[60px] h-[61px] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/menu-home.png"
                            alt="meatIcon"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Link>
                <div className="w-[70px] h-[70px] relative active:scale-90 transition-transform duration-200">
                    <Image
                        src="/image/menu-game.png"
                        alt="meatIcon"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <Link href="/invite">
                    <div className="w-[60px] h-[61px] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/menu-invite.png"
                            alt="meatIcon"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Link>
                <Link href="/leaderboard">
                    <div className="w-[60px] h-[61px] relative active:scale-90 transition-transform duration-200">
                        <Image
                            src="/image/menu-rank.png"
                            alt="meatIcon"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
}