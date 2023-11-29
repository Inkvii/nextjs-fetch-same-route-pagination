export function createMaxLengthRule(length = 255) {
  return { value: length, message: "Value is too long" }
}

export function createMinValueRule(min = 0) {
  return { value: min, message: "Value is too small" }
}

// eslint-disable-next-line  @typescript-eslint/no-loss-of-precision
export function createMaxValueRule(max = 99999999999999999.99) {
  return { value: max, message: "Value is above maximum number" }
}

export function createValueIsRequiredRule(value = true) {
  return { value: value, message: "Cannot be empty" }
}
