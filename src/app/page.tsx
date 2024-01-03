import { Button } from "@/components/ui/button";
import LoginModal from "@/components/ui/tony/login-modal";
import Mansory from "@/components/ui/tony/mansory";
// import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 ">
      <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-50 via-slate-50 to-teal-50"></div>

      <header className=" backdrop: mt-2 flex w-full justify-between">
        <a href="#" className="flex items-center gap-3">
          <Image height={24} width={100} src="/vercel.svg" alt="logo" />
          <span className="text-lg font-semibold">NextJs Template</span>
        </a>
        <LoginModal />
      </header>

      <div className="  mt-10 max-w-xl space-y-5">
        <h2 className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl md:leading-[5rem]">
          Minimal Saas Template
        </h2>
        <p className="text-center text-muted-foreground ">
          An template for your next project based on Next.js
        </p>

        <div className="flex justify-center gap-3">
          <Link
            target="_blank"
            href="https://github.com/tonyljx"
            className="flex items-center gap-2 rounded border px-4 py-2  transition-all duration-200 hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-200"
          >
            <svg
              fill="#000000"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              data-name="Layer 1"
            >
              <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
            </svg>
            <span>Star on Github</span>
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 rounded border px-4 py-2  transition-all duration-200 hover:-translate-y-2 hover:shadow-lg hover:shadow-violet-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                opacity="1"
                fill="#1E3050"
                d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
              />
            </svg>
            <span>Follow on Twitter</span>
          </Link>
        </div>
      </div>

      <Mansory />
    </main>
  );
}
