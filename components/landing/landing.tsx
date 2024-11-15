"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const detectOS = () => {
  if (typeof window !== "undefined") {
    const platform = navigator.platform.toLowerCase();
    const userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes("mac")) {
      if (userAgent.includes("intel mac os")) return "Download for macOS (Intel)";
      if (userAgent.includes("arm") || userAgent.includes("apple silicon")) return "Download for macOS (Apple Silicon)";
      return "Download for macOS";
    }
    if (platform.includes("win")) return "Download for Windows";
    if (platform.includes("linux")) return "Download for Linux";
  }
  return "Unknown";
};

export default function LandingPage() {
  const [selectedOS, setSelectedOS] = useState("");

  useEffect(() => {
    const detectedOS = detectOS();
    setSelectedOS(detectedOS);
  }, []);

  return (
    <div className="relative flex flex-col py-20 text-white overflow-hidden">
      {/* Fondo de cuadrícula con el efecto de luz azul */}
      <div className="absolute inset-0 z-[-1]">
        {/* Fondo base */}
        <div className="background-base w-full h-full absolute top-0 left-0 z-[-1]">
          <div
            className="grid-bg bg-cover bg-center w-full h-full"
            style={{
              background: "url('./grid-bg.svg') no-repeat",
            }}
          />
        </div>
        {/* Fondo de grano */}
        <div
          className="grain-background bg-repeat w-full h-full absolute top-0 left-0"
          style={{
            background: "url('./grain-bg.svg') repeat",
          }}
        />
      
      
       <div
        className="large-blur w-full h-full absolute top-0 left-0"
        style={{
          background: "linear-gradient(to bottom right, rgba(0, 123, 255, 0.5) 0%, rgba(0, 123, 255, 0) 70%)",
          height: "800px",
          width: "55%",  
          opacity: 0.3,
        }}
      />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-12 lg:space-y-0 lg:space-x-12 flex flex-col py-20 lg:flex-row items-center justify-between">
        {/* Contenido del landing page */}
        <div className="flex-1 space-y-6">
          <h1 className="text-6xl sm:text-7xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center md:text-left">
            The V Programming <br /> Language
          </h1>
          <p className="text-lg text-gray-300">
            Simple, fast, safe, compiled. For developing maintainable software.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="https://github.com/vlang/v" className="px-6 py-3 flex items-center bg-gradient-to-b from-black to-zinc-900 text-white gap-x-2 rounded-lg font-medium hover:to-zinc-800 transition-all">
              GitHub
              <Image 
                src={"/github.svg"}
                width={24}
                height={24}
                alt={"Github"}             
              />
            </Link>

            <div className="relative">
              <button className="px-6 py-3 bg-transparent border rounded-lg font-medium transition flex items-center gap-x-2">
                {selectedOS.includes("macOS") && <Image src={"/macos.svg"} width={24} height={24} alt="macOS" />}
                {selectedOS.includes("Windows") && <Image src={"/windows.svg"} width={24} height={24} alt="Windows" />}
                {selectedOS.includes("Linux") && <Image src={"/linux.svg"} width={24} height={24} alt="Linux" />}

                {selectedOS !== "Unknown" ? selectedOS : "Select OS"}
              </button>

              <div className="absolute top-full mt-2 bg-white text-black shadow-lg rounded-md w-full hidden group-hover:block">
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedOS("Download for macOS (Intel)")}>
                    <Link href="/downloads/macos-intel">Download for macOS (Intel)</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedOS("Download for macOS (Apple Silicon)")}>
                    <Link href="/downloads/macos-apple-silicon">Download for macOS (Apple Silicon)</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedOS("Download for Windows")}>
                    <Link href="/downloads/windows">Download for Windows</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer" onClick={() => setSelectedOS("Download for Linux")}>
                    <Link href="/downloads/linux">Download for Linux</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg rounded-lg p-6 overflow-hidden relative bg-zinc-900 text-white">
          <pre className="text-lg">
            <code>
              {`
// Example of a HTTP server in V
import net.http

fn main() {
    server := http.new_server({
        port: 8080
    })
    server.handle("/", fn (req http.Request) http.Response {
        return http.Response{
            body: "Hello, world!"
        }
    })
    println("Servidor corriendo en http://localhost:8080")
    server.listen() or {
        println("Error: $err")
    }
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
