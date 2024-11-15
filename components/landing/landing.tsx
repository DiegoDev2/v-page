import Link from "next/link";
import Image from "next/image";


export default function LandingPage() {

  return (
    <div className="relative flex flex-col py-20 text-white overflow-hidden">
      <div className="absolute inset-0 z-[-1]">
        <div className="background-base w-full h-full absolute top-0 left-0 z-[-1]">
          <div
            className="grid-bg bg-cover bg-center w-full h-full"
            style={{
              background: "url('./grid-bg.svg') no-repeat",
            }}
          />
        </div>
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
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl py-2 font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            The V Programming <br /> Language
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300">
            Simple, fast, safe, compiled. For developing maintainable software.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <Link href="https://github.com/vlang/v" className="px-6 py-3 flex items-center bg-gradient-to-b from-black to-zinc-900 text-white gap-x-2 rounded-lg font-medium hover:to-zinc-800 transition-all">
              GitHub
              <Image src={"/github.svg"} width={24} height={24} alt={"Github"} />
            </Link>

            <Link href="https://github.com/vlang/v/releases/" className="px-6 py-3 bg-transparent border rounded-lg font-medium transition flex items-center gap-x-2">
              Download
            </Link>
          </div>
        </div>
        <div className="flex-1 relative w-full max-w-lg">
          <Image
            src={"/veasel.png"}
            width={200}
            height={200}
            alt={"Download code"}
            className="absolute bottom-[320px] left-1/2 transform -translate-x-1/2 z-20"
          />
          <div className="rounded-lg p-6 overflow-hidden bg-zinc-900 text-white mt-20 relative">
            <pre className="text-xs sm:text-xs">
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
    println("Server running at http://localhost:8080")
    server.listen() or {
        println("Error: $err")
    }
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
