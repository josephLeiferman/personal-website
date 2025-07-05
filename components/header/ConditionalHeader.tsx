'use client'

import { usePathname } from 'next/navigation';
import { Header } from '@/app/header'

export function ConditionalHeader() {
  const pathname = usePathname()

  // Add other excluded paths as needed
  const shouldShowHeader = !pathname.startsWith('/blog')

  return shouldShowHeader ? <Header /> : null
}