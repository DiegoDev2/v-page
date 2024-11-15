import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "BrunoVDR",
    username: "@BrunoVDR",
    body: "The V development team does an amazing job. I've never seen a language evolve that fast; I suspect you guys never sleep. I hope V will remain a simple, clean language and have a bright future. Thanks for all your hard work. ",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Joel L.",
    username: "@Joel_L.",
    body: `I'm mostly surprised by how many things "just work". Channels and closures made implementing asynchronous callbacks for C functions such a breeze. Thanks for that! 😄 `,
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "pbarker",
    username: "@pbarker",
    body: "Really like the direction of V, been wondering when this kind of language would pop up. ",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Hoss",
    username: "@Hoss",
    body: `I come from a strong Java and Go background and have been playing with Rust. V looks pretty amazing in terms of readability.`,
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "visrut",
    username: "@visrut",
    body: `V is amazing. Things I like about it:
           Flexibility for operator overloading. (it makes syntax intuitive)
           Compiles directly to C, and I love C
            Flexibility for having and not having garbage collection
            Go concurrency model `,
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "devsou.com",
    username: "@devsou.com",
    body: "V is amazingly simple! ",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        "border-none bg-gray-800 transition hover:bg-gray-700 "
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-gray-400">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-gray-300">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="py-40">
      <h2 className="text-3xl font-bold px-14 py-3 sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        What developers say about V
        </h2>
          <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      {/* Gradientes laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-dark from-black"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-dark from-black"></div>
    </div>
    </div>
  
  );
}
