import { cacheLife } from "next/cache"

export const TEMPLATE_PRICE_URL = "https://velin.taymakz.ir/api/template-price"
export const TEMPLATE_DEMO_URL = "https://velin.taymakz.ir/"
export const TEMPLATE_PREVIEW_IMAGE =
  "https://personal-taymkz.s3.ir-thr-at1.arvanstorage.ir/velin-preview.png"

export interface TemplatePrice {
  currency: "IRT"
  basePrice: number
  offPercentage: number
  salePrice: number
  buyUrl: string
}

const FALLBACK_PRICE: TemplatePrice = {
  currency: "IRT",
  basePrice: 1000000,
  offPercentage: 55,
  salePrice: 450000,
  buyUrl: "https://t.me/velintemplate?direct",
}

/**
 * Fetches the Velin template price from the canonical price API.
 * Cached with Next.js `"use cache"` (same pattern as `getGithubStarCount`)
 * so the price survives across requests and only revalidates hourly.
 * Falls back to a static snapshot when the API is unreachable.
 */
export async function getTemplatePrice(): Promise<TemplatePrice> {
  "use cache"
  cacheLife("hours")

  try {
    const res = await fetch(TEMPLATE_PRICE_URL, {
      headers: { Accept: "application/json" },
    })

    if (!res.ok) return FALLBACK_PRICE

    const data = (await res.json()) as Partial<TemplatePrice>
    if (
      typeof data.basePrice !== "number" ||
      typeof data.salePrice !== "number" ||
      typeof data.offPercentage !== "number" ||
      typeof data.buyUrl !== "string"
    ) {
      return FALLBACK_PRICE
    }

    return {
      currency: "IRT",
      basePrice: data.basePrice,
      offPercentage: data.offPercentage,
      salePrice: data.salePrice,
      buyUrl: data.buyUrl,
    }
  } catch {
    return FALLBACK_PRICE
  }
}

/** `450000` -> `"450,000"` — Toman has no minor units to show. */
export function formatToman(value: number): string {
  return new Intl.NumberFormat("en-US").format(value)
}
