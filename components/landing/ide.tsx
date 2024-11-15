"use client";
import Image from "next/image";

export default function SupportedIDEs() {
  return (
    <div className="py-20 text-white bg-black">
      <div className="max-w-7xl mx-auto px-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 py-3">
          Supported IDEs
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-300">
          V Programming Language is supported by a variety of powerful IDEs and text editors. Choose your favorite editor to enhance your coding experience with V.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
          <div className="relative p-6 border border-neutral-800 rounded-lg">
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-blue-500 text-xl font-bold">+</div>
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-blue-500 text-xl font-bold">+</div>
            <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-blue-500 text-xl font-bold">+</div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-blue-500 text-xl font-bold">+</div>

            <div className="flex gap-10 items-center justify-center space-x-4 border-b border-neutral-800 py-4">
              <Image src={"/ide/vscode.svg"} width={40} height={40} alt="VSCode" />
              <div className="h-12 border-l border-neutral-800"></div>
              <Image src={"/ide/nvim.svg"} width={40} height={40} alt="Vim & Nvim" />
              <div className="h-12 border-l border-neutral-800"></div>
              <Image src={"/ide/intellij.svg"} width={40} height={40} alt="IntelliJ" />
              <div className="h-12 border-l border-neutral-800"></div>
              <Image src={"/ide/sublime.svg"} width={40} height={40} alt="Sublime Text" />
              <div className="h-12 border-l border-neutral-800"></div>
              <Image src={"/ide/emacs.svg"} width={40} height={40} alt="emacs" />
            </div>
            <p className="mt-4 text-lg text-gray-400 text-center">
              These IDEs and text editors provide full support for the V language, enhancing your development experience with syntax highlighting, linting, and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
