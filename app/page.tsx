import Image from "next/image";
import { Register } from "@/components/Register";
import { Steps } from "@/components/Steps";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-44 pb-36 px-4">
      <div className="flex flex-col justify-center">
        <span className="flex justify-center pb-20">
          <Image
            alt="zerops logo"
            src="zerops.svg"
            width={100}
            height={100}
            draggable={false}
          />
        </span>
        <h1 className="text-[#292929] text-7xl font-bold text-center pb-10">
          Zerops <span className="text-[#616A71]">x</span> Next.js
        </h1>

        <Steps />
      </div>
    </main>
  );
}
