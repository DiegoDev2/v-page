import Patreon from "../landing/patreon";

export default function Button() {
    return (
      <button className=' bg-gradient-to-l from-black to-zinc-900 flex rounded-lg items-center gap-2 backdrop-blur-xl border left-0 top-0 py-2 px-4 z-[100] border-neutral-900 transition-colors duration-300 border-b-none'>
       Support On <Patreon /> 
      </button>
    );
};
  