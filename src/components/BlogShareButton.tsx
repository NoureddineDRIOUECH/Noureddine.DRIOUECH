import { Twitter, Linkedin, Link2, MessageCircle } from "lucide-react"
import { ShareButton, useCopyLink } from "@/components/ui/share-button"
import { toast } from "sonner"

interface BlogShareButtonProps {
  title: string
  url: string
}

export function BlogShareButton({ title, url }: BlogShareButtonProps) {
  const { copied, copyLink } = useCopyLink()

  const shareLinks = [
    {
      icon: Twitter,
      onClick: () =>
        window.open(
          `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer",
        ),
      label: "Share on Twitter",
    },
    {
      icon: Linkedin,
      onClick: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
          "noopener,noreferrer",
        ),
      label: "Share on LinkedIn",
    },
    {
      icon: MessageCircle,
      onClick: () =>
        window.open(
          `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
          "_blank",
          "noopener,noreferrer",
        ),
      label: "Share on WhatsApp",
    },
    {
      icon: Link2,
      onClick: () => {
        copyLink()
        toast.success("Link copied to clipboard!")
      },
      label: "Copy link",
    },
  ]

  return (
    <ShareButton links={shareLinks}>
      <Link2 className="h-4 w-4" />
      {copied ? "Copied!" : "Share"}
    </ShareButton>
  )
}
