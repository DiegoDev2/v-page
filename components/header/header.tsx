import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Header() {
  return (
    <header className="fixed right-0 bg-black/50 backdrop-blur-xl border left-0 top-0 py-2 px-4 z-[100] border-neutral-900 transition-colors duration-300 border-b-none">
      <div className="flex items-center justify-between max-w-[1900px] mx-auto">
        <aside className="flex items-center">
          <div className="flex lg:ml-0 cursor-pointer">
            <div className="flex lg:ml-0 cursor-pointer font-black py-1 rounded-sm">
              <Link href="/" className="flex flex-row items-center gap-2">
                <Image
                  alt="footer-logo"
                  loading="lazy"
                  width="60"
                  height="60"
                  decoding="async"
                  className="rounded-sm p-1.5"
                  src="/vlogo.png"
                />
              </Link>
            </div>
          </div>
        </aside>

        {/* Navigation menu (hidden on mobile) */}
        <div className="hidden md:block">
          <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <nav aria-label="Main" className="relative z-10 flex max-w-max flex-1 items-center justify-center">
              <div style={{ position: 'relative' }}>
                <ul className="group flex flex-1 list-none items-center justify-center space-x-1">
                  <li>
                    <button className="group inline-flex h-9 w-max items-center underline-offset-4 underline-green-500 justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline">
                      Features
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <button className="group inline-flex h-9 w-max items-center underline-offset-4 underline-green-500 justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline">
                      Examples
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300"
                        aria-hidden="true"
                      >
                        <path
                          d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z"
                          fill="currentColor"
                          fillRule="evenodd"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </button>
                  </li>
                  <li>
                    <Link href="/#about" className="group inline-flex h-9 w-max items-center underline-offset-4 underline-green-500 justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="group inline-flex h-9 w-max items-center underline-offset-4 underline-green-500 justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/pricing" className="group inline-flex h-9 w-max items-center underline-offset-4 underline-green-500 justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline">
                      Forum
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </nav>
        </div>

        <aside className="flex items-center">
          <Link href="/dashboard" className="">
            <Button/>
          </Link>
        </aside>

        <div className="flex justify-end md:hidden">
          <button type="button" aria-haspopup="dialog" aria-expanded="false" className="px-4 py-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" height="24" width="24" stroke="currentColor" className="h-6 w-6" viewBox="0 0 24 24">
              <path d="M5 6h14M5 12h14M5 18h14" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
