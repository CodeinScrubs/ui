import type { Metadata } from "next"
import { ArrowRightIcon, HeartIcon } from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { BECOME_SPONSOR_URL } from "@/components/mdx/sponsors"

export const metadata: Metadata = {
  title: "Sponsors — PersianLabs/ui",
  description:
    "Support my open-source work — your logo across every project, website, and README.",
}

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />

      <main className="flex flex-1 flex-col">
        <div className="mx-auto w-full max-w-2xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <HeartIcon className="size-3.5 text-primary" />
            PersianLabs/ui is free and open source
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Sponsors
          </h1>

          <p className="mt-4 text-base text-muted-foreground">
            All my components, utilities, tools and apps are open source and
            free forever. Building and maintaining them takes real time —
            sponsors keep it that way.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-xl border bg-card p-6">
            <h2 className="text-lg font-semibold">What you get</h2>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                Your company logo on this website, on every page.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                Your logo in all my open-source apps and websites.
              </li>
              <li className="flex gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                A sponsor note with your logo in the READMEs of my repositories.
              </li>
            </ul>

            <a
              href={BECOME_SPONSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-2 inline-flex h-[35px] w-fit items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Become a sponsor
              <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100" />
            </a>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Questions or different sponsorship ideas? Reach out any time on{" "}
            <a
              href={BECOME_SPONSOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              Telegram
            </a>{" "}
            or find me on{" "}
            <a
              href="https://github.com/taymakz"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
            >
              GitHub
            </a>{" "}
            — happy to talk.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
