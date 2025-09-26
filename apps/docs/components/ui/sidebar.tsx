"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { X } from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Installation", href: "/installation" },
    ],
  },
  {
    title: "Components",
    items: [
      { title: "Button", href: "/components/button" },
    ],
  },
]

interface SidebarProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export function Sidebar({ className, isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 z-50 -translate-x-full transition-transform md:translate-x-0 md:sticky md:top-14",
          "h-screen w-64 shrink-0 border-r bg-background md:h-[calc(100vh-3.5rem)]",
          isOpen && "translate-x-0",
          className
        )}
      >
        <div className="flex h-full w-full flex-col">
          {/* Mobile header */}
          <div className="flex items-center justify-between p-4 md:hidden">
            <span className="font-bold text-xl">Serum UI</span>
            <button
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-auto p-4">
            <div className="space-y-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h4 className="mb-2 px-2 text-sm font-semibold text-foreground">
                    {section.title}
                  </h4>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={onClose}
                        className={cn(
                          "block rounded-md px-2 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                          pathname === item.href
                            ? "bg-accent text-accent-foreground font-medium"
                            : "text-muted-foreground"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
