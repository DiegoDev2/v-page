"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Contributor = {
  login: string;
  avatar_url: string;
  html_url: string;
};

export default function Contributors() {
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 100;

  useEffect(() => {
    const fetchAllContributors = async () => {
      const allContributors: Contributor[] = [];
      let page = 1;
      let hasMore = true;

      try {
        while (hasMore) {
          const response = await fetch(
            `https://api.github.com/repos/vlang/v/contributors?per_page=100&page=${page}`,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
              },
            }
          );

          if (!response.ok) {
            console.error("Error fetching contributors:", response.statusText);
            break;
          }

          const data: Contributor[] = await response.json();
          allContributors.push(...data);

           
          if (data.length < 100) {
            hasMore = false;
          }

          page++;
        }

        setContributors(allContributors);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchAllContributors();
  }, []);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedContributors = contributors.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (endIndex < contributors.length) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="relative px-16 py-20 text-white overflow-hidden">
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contributors
      </motion.h2>
      <motion.p
        className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Thanks to everyone who has contributed to the V programming language project!
      </motion.p>

      <div className="mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-4"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            {paginatedContributors.map((contributor) => (
              <motion.a
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transform transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 0}
          className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= contributors.length}
          className="px-4 py-2 bg-neutral-800 text-white rounded-lg disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
