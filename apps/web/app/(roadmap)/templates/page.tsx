import type { Metadata } from "next"
import Image from "next/image"
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BadgeCheckIcon,
  KeyRoundIcon,
  LayoutTemplateIcon,
  MessagesSquareIcon,
  RefreshCwIcon,
  SendIcon,
  SparklesIcon,
} from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import {
  TEMPLATE_DEMO_URL,
  TEMPLATE_PREVIEW_IMAGE,
  formatToman,
  getTemplatePrice,
} from "@/lib/template"

export const metadata: Metadata = {
  title: "Templates - PersianLabs/ui",
  description:
    "Premium Persian templates built with PersianLabs/ui - RTL-first, production-ready. Velin is live now: try the demo, buy once, get lifetime updates.",
}

const FEATURES = [
  "+50 pages - dashboard, orders, products, users, finance, blogs, media, tickets, analytics, settings & more",
]

const INSPIRED_BY = [
  { name: "Emil Kowalski", href: "https://emilkowal.ski/" },
  { name: "Paco Coursey", href: "https://paco.me/" },
  { name: "Jakub Krahel", href: "https://jakub.kr/" },
  { name: "Jakub Antalik", href: "https://jakubantalik.com/" },
]

const STEPS = [
  {
    icon: SendIcon,
    title: "Buy over Telegram",
    description:
      "Tap buy and complete your purchase over Telegram - fast, direct, no middlemen.",
  },
  {
    icon: KeyRoundIcon,
    title: "Get the code your way",
    description:
      "You're invited to the private GitHub repo with lifetime read-only access - or just ask for the source file instead.",
  },
  {
    icon: RefreshCwIcon,
    title: "Ship with lifetime updates",
    description:
      "Pull every future improvement, and open issues any time to request fixes.",
  },
]

export default async function TemplatesPage() {
  const price = await getTemplatePrice()

  return (
    <div className="flex min-h-full flex-col">
      <div className="mx-auto w-full max-w-5xl px-6 py-16 lg:px-8 lg:py-20">
        {/* Hero */}
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <SparklesIcon className="size-3.5 text-primary" />
            First premium template is live
          </div>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Templates
          </h1>
          <p className="mt-3 text-base leading-relaxed text-balance text-muted-foreground">
            Production-ready starters built with PersianLabs/ui - RTL-first,
            Persian typography, no vendored CSS. Buy once, own the code, receive
            updates forever.
          </p>
        </div>

        {/* Template list */}
        <div className="mt-10 flex flex-col gap-6">
          {/* Velin - everything in one card */}
          <article className="overflow-hidden rounded-2xl border border-border bg-card">
            {/* Top row: preview + intro */}
            <div className="grid items-start gap-6 p-4 sm:p-6 md:grid-cols-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted">
                <Image
                  src={TEMPLATE_PREVIEW_IMAGE}
                  alt="Velin template preview"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="flex min-w-0 flex-col">
                <div className="flex items-center justify-between gap-3">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Velin
                  </h2>
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground">
                    <BadgeCheckIcon className="size-3.5" />
                    Premium
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A Persian-first admin dashboard template, the fastest way to
                  launch a real product on top of PersianLabs/ui.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {[
                    "Next.js 16",
                    "Base UI",
                    "shadcn",
                    "Turborepo",
                    "Tailwind v4",
                    "TanStack Query",
                    "PersianLabs/ui",
                    "RTL-first",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {FEATURES.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      Inspired by{" "}
                      <a
                        href="https://linear.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
                      >
                        Linear.app
                      </a>{" "}
                      design
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                    <span>
                      Uses some designs from{" "}
                      <a
                        href="https://devl.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
                      >
                        devl.dev
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Below both: inspired + purchase */}
            <div className="grid gap-4 border-t border-border/60 md:grid-cols-2">
              <div className="flex flex-col justify-center rounded-xl p-5">
                <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
                  Inspired by the best
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Every pixel of Velin studies the designers who set the bar for
                  modern interfaces - motion, type and rhythm, not decoration.
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1.5">
                  {INSPIRED_BY.map((designer) => (
                    <a
                      key={designer.name}
                      href={designer.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold tracking-tight transition-colors hover:text-primary"
                    >
                      {designer.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-muted/60 p-5">
                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-xs text-muted-foreground">
                      One-time payment
                    </p>
                    <p className="mt-1 flex items-baseline gap-2">
                      <span className="text-2xl font-bold tracking-tight tabular-nums">
                        {formatToman(price.salePrice)}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Toman
                      </span>
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      <span className="tabular-nums line-through">
                        {formatToman(price.basePrice)}
                      </span>{" "}
                      Toman
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-600 tabular-nums dark:bg-emerald-500/15 dark:text-emerald-400">
                    −{price.offPercentage}%
                  </span>
                </div>

                <a
                  href={price.buyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-4 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Buy on Telegram
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
                </a>
                <a
                  href={TEMPLATE_DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-border px-4 text-sm font-medium transition-colors hover:bg-muted"
                >
                  Live demo
                  <ArrowUpRightIcon className="size-4" />
                </a>
                <p className="mt-2.5 text-center text-xs leading-relaxed text-muted-foreground">
                  After payment you&apos;re invited to the private GitHub repo -
                  or just ask for the source file.
                </p>
              </div>
            </div>
          </article>

          {/* Next drop placeholder */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-muted/30 p-8 text-center">
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-card ring-1 ring-border">
              <LayoutTemplateIcon className="size-5 text-muted-foreground" />
            </span>
            <h2 className="mt-4 text-base font-semibold tracking-tight">
              More templates are on the way
            </h2>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Free starters and new premium drops will land here. Velin is the
              first - the list grows from here.
            </p>
          </div>
        </div>

        {/* How it works */}
        <div className="mt-14">
          <h2 className="text-lg font-semibold tracking-tight">
            How paid templates work
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Public or private - you stay in control after you buy.
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {STEPS.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-lg bg-muted">
                  <step.icon className="size-4.5 text-foreground" />
                </span>
                <h3 className="mt-3 text-sm font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketplace teaser */}
        <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-dashed border-border bg-muted/30 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-card ring-1 ring-border">
              <MessagesSquareIcon className="size-4.5 text-muted-foreground" />
            </span>
            <div>
              <h3 className="text-sm font-semibold">
                Built something with PersianLabs/ui?
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                A marketplace is coming - you&apos;ll be able to list your own
                templates with your own contact button.
              </p>
            </div>
          </div>
          <a
            href="https://t.me/taymakz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card px-4 text-sm font-medium transition-colors hover:bg-muted"
          >
            Talk to us
          </a>
        </div>
      </div>

      <div className="mt-auto">
        <SiteFooter />
      </div>
    </div>
  )
}
