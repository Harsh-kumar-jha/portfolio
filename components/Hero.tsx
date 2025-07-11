'use client';

import Image from 'next/image';
import { MailCheckIcon } from './icons/MailCheckIcon';
import { LinkedinIcon } from './icons/LinkedinIcon';
import { GithubIcon } from './icons/GithubIcon';
import { useState } from 'react';

export default function Hero() {
  const [showTooltip, setShowTooltip] = useState<{ type: 'email' | 'linkedin' | 'github' | null }>({ type: null });
  return (
    <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
      <div className="space-y-6 flex-1 sm:text-center lg:text-left">
        <h1 className="text-white font-bold text-4xl xl:text-5xl">
          Harsh Jha
        </h1>
        <h2 className="text-indigo-400 font-semibold text-2xl xl:text-3xl">
          Java Developer & Full-Stack Engineer
        </h2>
        <p className="font-inter text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0 text-lg xl:text-xl">
          Experienced Java Developer with 1+ year of full-stack development experience specializing in Spring Boot, React.js, and healthcare applications. Proficient in Docker, CI/CD, AWS, and Agile methodologies with a proven track record of delivering robust, compliant enterprise solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:justify-start justify-center pt-4">
          <a
            href="mailto:harshkjha1@gmail.com"
            className="relative group"
            aria-label="Email Harsh Jha"
            onMouseEnter={() => setShowTooltip({ type: 'email' })}
            onMouseLeave={() => setShowTooltip({ type: null })}
          >
            <MailCheckIcon size={36} />
            {showTooltip.type === 'email' && (
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-20 shadow-lg">
                Email Me
              </span>
            )}
          </a>
          <a
            href="https://linkedin.com/in/harsh-kumar-jha-1531321b9"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="LinkedIn Profile"
            onMouseEnter={() => setShowTooltip({ type: 'linkedin' })}
            onMouseLeave={() => setShowTooltip({ type: null })}
          >
            <LinkedinIcon size={36} />
            {showTooltip.type === 'linkedin' && (
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-20 shadow-lg">
                LinkedIn
              </span>
            )}
          </a>
          <a
            href="https://github.com/Harsh-kumar-jha"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            aria-label="GitHub Profile"
            onMouseEnter={() => setShowTooltip({ type: 'github' })}
            onMouseLeave={() => setShowTooltip({ type: null })}
          >
            <GithubIcon size={36} />
            {showTooltip.type === 'github' && (
              <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 rounded bg-black text-white text-xs whitespace-nowrap z-20 shadow-lg">
                GitHub
              </span>
            )}
          </a>
        </div>
      </div>
      <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3 flex items-center justify-center">
        <Image
          src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
          alt="Heatmap illustration"
          width={600}
          height={400}
          className="w-full mx-auto sm:w-10/12  lg:w-full"
          priority
        />
      </div>
    </section>
  );
}
