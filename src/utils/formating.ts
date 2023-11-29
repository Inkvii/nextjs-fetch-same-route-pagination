export function formatMoney(
  grossAmount: number | string | null | undefined,
  currency: string | undefined | null,
  shouldReturnZero: boolean = true,
  locale?: string
): string {
  if (!grossAmount && !shouldReturnZero) return ""

  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency ?? undefined,
    currencyDisplay: "narrowSymbol",
  })
  return formatter.format(Number(grossAmount ?? 0))
}

export function getCurrencySymbol(currency: string | undefined | null, locale?: string) {
  return (0)
    .toLocaleString(locale, {
      style: "currency",
      currency: currency ?? undefined,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, "")
    .trim()
}
