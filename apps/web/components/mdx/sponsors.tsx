import type * as React from "react"
import { ArrowRightIcon } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

export type SponsorTier = "diamond" | "gold" | "silver"

export type Sponsor = {
  name: string
  description: string
  url: string
  tier: SponsorTier
  /** Optional brand mark — an SVG/image node rendered at 24px. */
  logo?: React.ReactNode
}

/**
 * Add sponsors here (highest tier first); the card groups them under their
 * tier label. While the list is empty the card shows only the call-to-action.
 */
export const SPONSORS: Sponsor[] = []

export const BECOME_SPONSOR_URL = "https://t.me/Taymakz"

const TIER_LABELS: Record<SponsorTier, string> = {
  diamond: "Diamond",
  gold: "Gold",
  silver: "Silver",
}

export function Sponsors({ className }: { className?: string }) {
  const tiers = (["diamond", "gold", "silver"] as const)
    .map((tier) => ({
      tier,
      sponsors: SPONSORS.filter((s) => s.tier === tier),
    }))
    .filter((group) => group.sponsors.length > 0)

  return (
    <div className={cn("rounded-xl border bg-card p-4", className)}>
      <p className="text-sm font-semibold">Sponsors</p>

      {tiers.map((group) => (
        <div key={group.tier} className="mt-3">
          <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
            {TIER_LABELS[group.tier]}
          </p>
          <div className="mt-2 flex flex-col gap-3">
            {group.sponsors.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/sponsor flex items-center gap-2.5"
              >
                {sponsor.logo && (
                  <span className="flex size-6 shrink-0 items-center justify-center [&_svg]:size-6">
                    {sponsor.logo}
                  </span>
                )}
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold group-hover/sponsor:text-primary">
                    {sponsor.name}
                  </span>
                  <span className="block truncate text-xs text-muted-foreground">
                    {sponsor.description}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      ))}

      <a
        href={BECOME_SPONSOR_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group mt-4 flex items-center justify-between gap-2 text-sm font-medium transition-colors hover:text-primary"
      >
        Become a sponsor
        <ArrowRightIcon className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
      </a>
    </div>
  )
}
