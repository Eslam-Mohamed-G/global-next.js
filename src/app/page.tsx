import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-black w-3/4 mx-auto flex flex-col justify-items-center">
      <div className="flex items-center justify-end relative before:content-[''] before:absolute before:bottom-0 before:h-0.5 before:start-16 before:end-3.5 before:bg-borderGray before:z-0">
        {/* text */}
        <div className="flex flex-col justify-center text-white gap-7">
          {/* there words */}
          <div className="flex flex-col text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold">
            <span>Your next</span>
            <span>interactive</span>
            <span>experience</span>
          </div>

          {/* link to hire us */}
          <Link href="/hire" className="relative group cursor-pointer w-fit px-3 py-1 flex items-center content-center gap-2">
            <div className="bg-blueColor w-20 group-hover:w-full h-full absolute top-0 right-0 z-10 transition-all delay-75" />
            <span className="w-fit uppercase font-bold relative z-50">Hire us</span>

            <svg className="w-4 h-4 text-white relative z-50" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>

        {/* introduction image */}
        <img src="/img/introduction.png" alt="introduction" className="hidden sm:block w-1/2 m-0 p-0" />
      </div>

      <div className="flex-1 flex flex-col md:flex-row items-end justify-center md:justify-around w-[90%] mx-auto text-white relative before:content-[''] before:absolute before:-top-[3px] before:w-7 before:h-1 before:start-10 before:bg-blueColor before:z-0">
        <div className="flex flex-col gap-4 md:w-[27%] text-start cursor-pointer opacity-15 hover:opacity-100 transition-all delay-100">
          <h1 className="uppercase font-bold">metiew & smith</h1>
          <span>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Quia</span>
        </div>
        <div className="flex flex-col gap-4 md:w-[27%] text-start cursor-pointer opacity-15 hover:opacity-100 transition-all delay-100">
          <h1 className="uppercase font-bold">fantasy interactive</h1>
          <span>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Quia</span>
        </div>
        <div className="flex flex-col gap-4 md:w-[27%] text-start cursor-pointer opacity-15 hover:opacity-100 transition-all delay-100">
          <h1 className="uppercase font-bold">paul & shark</h1>
          <span>Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. Quia</span>
        </div>
      </div>
    </div>
  );
}
