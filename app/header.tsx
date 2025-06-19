'use client'
import { TextScramble } from '@/components/motion-primitives/text-scramble';
import { TiltSpotlight } from '@/components/header/tilt-spotlight'

export function Header() {
  return (
    <header className="mb-8 flex flex-col gap-6
                       sm:flex-row sm:items-start
                       sm:justify-between">

      <div>
        <TextScramble
          as="h1"
          className="text-zinc-800 font-bold dark:text-zinc-100 text-3xl"
          duration={1.5}
        >
          Joseph Leiferman
        </TextScramble>
        <TextScramble
          as="h2"
          className="text-zinc-700 dark:text-zinc-300 text-xl"
          duration={2.5}
        >
          Senior Software Engineer
        </TextScramble>
        <TextScramble
          as="h2"
          className="text-zinc-700 dark:text-zinc-300 text-lg"
          duration={3.5}
        >
          Los Angeles, California
        </TextScramble>
      </div>
      <div className="hidden sm:block mx-auto w-64 shrink-0 sm:mx-0">
        <TiltSpotlight />
      </div>

    </header>
  )
}
