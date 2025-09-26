"use client"

import { useState } from "react"
import { Header } from "@/components/ui/header"
import { Sidebar } from "@/components/ui/sidebar"

interface DocsLayoutProps {
  children: React.ReactNode
}

export function DocsLayout({ children }: DocsLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:gap-20">
          <div className="mx-auto w-full min-w-0">
            <div className="prose prose-slate max-w-none dark:prose-invert prose-headings:font-semibold prose-a:font-normal prose-code:font-normal prose-code:before:content-none prose-code:after:content-none prose-th:border prose-td:border">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
