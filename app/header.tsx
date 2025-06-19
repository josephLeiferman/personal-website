'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-black font-bold"
          delay={0.1}
        >
          Joseph Leiferman
        </TextEffect>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-zinc-600 dark:text-zinc-500"
          delay={0.7}
        >
          Senior Software Engineer
        </TextEffect>
      </div>
    </header>
  )
}
