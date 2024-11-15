"use client";
import Image from "next/image";
import Link from "next/link";

export default function SupportedIDEs() {
  return (
    <div className="relative py-20 text-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[50vw] h-full">
        <div
          className="w-full h-full bg-cover "
          style={{
            background: "url('./small-blur.svg') no-repeat",
            backgroundPosition: "left top",
            backgroundSize: "cover", 
            maskImage: 'linear-gradient(black 70%, transparent)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-3 text-center md:text-left">
          Supported IDEs
        </h2>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 text-center md:text-left">
          V Programming Language is supported by a variety of powerful IDEs and text editors. Choose your favorite editor to enhance your coding experience with V.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="relative p-6 border border-neutral-800 rounded-lg bg-neutral-900/50 backdrop-blur-lg">

            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-blue-500 text-xl font-bold">+</div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-blue-500 text-xl font-bold">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-blue-500 text-xl font-bold">+</div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-blue-500 text-xl font-bold">+</div>

            <div className="flex flex-wrap gap-6 sm:gap-8 lg:gap-10 items-center justify-center border-b border-neutral-800 py-4">
              <Link href={"https://marketplace.visualstudio.com/items?itemName=vlanguage.vscode-vlang"} target="_blank">
                <Image className="hover:rotate-2 hover:scale-110 transition-transform " src={"/ide/vscode.svg"} width={40} height={40} alt="VSCode" />
              </Link>
              <div className="hidden sm:block h-12 border-l border-neutral-800"></div>
              <Link href={"https://github.com/ollykel/v-vim"} target="_blank">
                <Image className="hover:rotate-2 hover:scale-110 transition-transform " src={"/ide/nvim.svg"} width={40} height={40} alt="Vim & Nvim" />
              </Link>
              <div className="hidden sm:block h-12 border-l border-neutral-800"></div>
              <Link href={"https://plugins.jetbrains.com/plugin/24183-vlang"} target="_blank">
                <Image className="hover:rotate-2 hover:scale-110 transition-transform " src={"/ide/intellij.svg"} width={40} height={40} alt="IntelliJ" />
              </Link>
              <div className="hidden sm:block h-12 border-l border-neutral-800"></div>
              <Link href={"https://github.com/elliotchance/vlang-sublime"} target="_blank">
                <Image className="hover:rotate-2 hover:scale-110 transition-transform " src={"/ide/sublime.svg"} width={40} height={40} alt="Sublime Text" />
              </Link>
              <div className="hidden sm:block h-12 border-l border-neutral-800"></div>
              <Link href={"https://github.com/damon-kwok/v-mode"} target="_blank">
                <Image className="hover:rotate-2 hover:scale-110 transition-transform " src={"/ide/emacs.svg"} width={40} height={40} alt="Emacs" />
              </Link>
            </div>

            <p className="mt-4 text-sm sm:text-lg text-gray-400 text-center">
              These IDEs and text editors provide full support for the V language, enhancing your development experience with syntax highlighting, linting, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
