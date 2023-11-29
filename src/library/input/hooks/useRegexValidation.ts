import { ChangeEvent, useState } from "react"

export default function useRegexValidation<T>(
  defaultValue: T,
  regex: RegExp | undefined,
  onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined
) {
  const [oldValue, setOldValue] = useState<string>((defaultValue as string) ?? "")

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!regex) {
      onChange?.(e)
      return
    }

    const testRegex = regex.test(e.target.value)

    if (!testRegex) {
      e.target.value = oldValue
    }

    setOldValue(e.target.value)
    onChange?.(e)
  }

  return { handleOnChange }
}
