import Badge from "@/components/ui/Badge"

interface ProductBadgesProps {
  badges: string[]
}

export default function ProductBadges({ badges }: ProductBadgesProps) {
  const badgeVariants = ["success", "info", "default"] as const

  return (
    <div className="flex flex-wrap gap-2">
      {badges.map((badge, idx) => (
        <Badge key={idx} variant={badgeVariants[idx % 3]} size="sm">
          {badge}
        </Badge>
      ))}
    </div>
  )
}
