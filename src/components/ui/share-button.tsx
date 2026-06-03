import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Link2 } from "lucide-react"

interface ShareLink {
  icon: React.ComponentType<{ className?: string }>
  onClick: () => void
  label: string
}

interface ShareButtonProps {
  links: ShareLink[]
  children: React.ReactNode
}

export function ShareButton({ links, children }: ShareButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Button
        className={cn(
          "relative min-w-40 rounded-3xl",
          "bg-background dark:bg-background",
          "hover:bg-muted dark:hover:bg-muted",
          "text-foreground dark:text-foreground",
          "border border-border",
          "transition-all duration-300",
          isHovered ? "opacity-0" : "opacity-100",
        )}
      >
        <span className="flex items-center gap-2">{children}</span>
      </Button>

      <div className="absolute left-0 top-0 flex h-10">
        {links.map((link, index) => {
          const Icon = link.icon
          return (
            <button
              type="button"
              key={index}
              onClick={link.onClick}
              className={cn(
                "h-10 w-10",
                "flex items-center justify-center",
                "bg-foreground dark:bg-foreground",
                "text-background dark:text-background",
                "transition-all duration-300",
                index === 0 && "rounded-l-3xl",
                index === links.length - 1 && "rounded-r-3xl",
                "border-r border-background/10 last:border-r-0",
                "hover:bg-foreground/90 dark:hover:bg-foreground/90",
                isHovered
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0",
                index === 0 && "transition-all duration-200",
                index === 1 && "delay-[50ms] transition-all duration-200",
                index === 2 && "transition-all delay-100 duration-200",
                index === 3 && "transition-all delay-150 duration-200",
              )}
            >
              <Icon className="size-4" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function useCopyLink() {
  const [copied, setCopied] = useState(false)

  const copyLink = async () => {
    await navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return { copied, copyLink }
}
