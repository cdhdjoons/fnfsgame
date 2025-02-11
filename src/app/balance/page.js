import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-full">
      <div className=" w-full h-full max-w-[500px] relative flex flex-col justify-evenly bg-cover bg-no-repeat " >
        <div className=" bg-mainRed w-full py-[5vmax] flex justify-center items-center relative">
          <div className="w-[30vmax] max-w-[295px] aspect-[295/183] relative ">
            <Image
              src="/image/fnfsLogo.png"
              alt="main logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" flex justify-center gap-[5%] w-full absolute bottom-[-11%] sm:bottom-[-9%]">
            <div className=" w-[145px] sm:w-[15vmax] aspect-[145/59] relative">
              <Image
                src="/image/fnfs_ticket.png"
                alt="ticketIcon"
                layout="fill"
                objectFit="cover"
              />
              <p className=" absolute right-[10%] top-0 text-white text-[2.2vmax] sm:text-[2.2vmin]">Tickets</p>
              <p className=" absolute right-[10%] bottom-0 text-white text-[2.2vmax] sm:text-[2.2vmin]">00000</p>
            </div>
            <div className=" w-[132px] sm:w-[15vmax] aspect-[132/59] relative">
              <Image
                src="/image/fnfs_n2o.png"
                alt="meatIcon"
                layout="fill"
                objectFit="cover"
              />
              <p className=" absolute right-[10%] top-0 text-white text-[2.2vmax] sm:text-[2.2vmin]">N2O</p>
              <p className=" absolute right-[10%] bottom-0 text-white text-[2.2vmax] sm:text-[2.2vmin]">00000</p>
            </div>
          </div>
        </div>
        <p className="w-full text-center text-[6vmax] sm:text-[6vmin] -rotate-2
        bg-gradient-to-r from-[#F9BC2F] via-[#FED9A5] to-[#EB9F15] bg-clip-text text-transparent [-webkit-text-stroke:1px_black] ">Get Ticket</p>
        <div className=" w-full py-[1vmin] flex gap-3 flex-col items-center justify-center">
          <div className=" w-[36vmax] sm:w-[40vmin] aspect-[319/78] relative active:scale-90 transition-transform duration-200 ">
            <Image
              src="/image/fnfs_ticket1.png"
              alt="meatIcon"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-[36vmax] sm:w-[40vmin] aspect-[319/78] relative active:scale-90 transition-transform duration-200 ">
            <Image
              src="/image/fnfs_ticket2.png"
              alt="meatIcon"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="w-[36vmax] sm:w-[40vmin] aspect-[319/78] relative active:scale-90 transition-transform duration-200 ">
            <Image
              src="/image/fnfs_ticket3.png"
              alt="meatIcon"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        
        
      </div>
    </div>
  );
}
