"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef, useCallback } from "react";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Change slide every 5 seconds
  }, [projects.length]);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(index);
      startTimer(); // Restart the timer
    },
    [startTimer],
  );

  const goToPrevious = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, projects.length, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex = (currentIndex + 1) % projects.length;
    goToSlide(newIndex);
  }, [currentIndex, projects.length, goToSlide]);

  return (
    <>
      <div className="relative w-full">
        <div
          className="overflow-hidden rounded-lg"
          style={{ height: "350px" }} // Adjust this value as needed
        >
          <div
            className="flex h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <Link href={project.link} className="block h-full">
                  <div className="h-full bg-gray-100 p-6 dark:bg-neutral-800">
                    <div className="relative mb-4 h-48 w-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="mb-2 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white bg-opacity-50 p-2 shadow-md transition-all duration-200 hover:bg-opacity-75 dark:bg-neutral-600 dark:bg-opacity-50 dark:hover:bg-opacity-75"
          aria-label="Previous project"
        >
          &#10094;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white bg-opacity-50 p-2 shadow-md transition-all duration-200 hover:bg-opacity-75 dark:bg-neutral-600 dark:bg-opacity-50 dark:hover:bg-opacity-75"
          aria-label="Next project"
        >
          &#10095;
        </button>
      </div>
      <div className="bottom-4 left-0 right-0 flex justify-center space-x-2 py-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              index === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};
