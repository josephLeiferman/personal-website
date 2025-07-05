'use client'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { Magnetic } from '@/components/ui/magnetic'

export default function LayoutBlogPost({
                                         children,
                                       }: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-gray-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-zinc-950" />

      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gray-300 dark:bg-zinc-600"
        springOptions={{ bounce: 0 }}
      />

      <div className="mb-8 flex items-center justify-between max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-zinc-800 dark:text-zinc-100">
          <a href="/" className="hover:font-extrabold transition-all">
            This Developer's Journal
          </a>
        </h1>
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
          <a
            href="https://www.buymeacoffee.com/josephLeiferman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-yellow-300 px-4 py-2 text-sm font-bold text-black shadow hover:bg-yellow-200 transition whitespace-nowrap"
          >
            ☕
          </a>
        </Magnetic>
      </div>

      <hr className="border-t border-zinc-200 dark:border-zinc-700 max-w-4xl mx-auto mb-12" />


      <main className="prose prose-gray pb-20 dark:prose-invert prose-h1:text-xl prose-h1:font-medium prose-h2:mt-12 prose-h2:scroll-m-20 prose-h2:text-lg prose-h2:font-medium prose-h3:text-base prose-h3:font-medium prose-h4:font-medium prose-h5:text-base prose-h5:font-medium prose-h6:text-base prose-h6:font-medium prose-strong:font-medium">
        {children}
      </main>
    </>
  )
}
