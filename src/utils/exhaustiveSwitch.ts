export function triggerExhaustiveSwitch(value: never, componentName: string): never {
  const exhaustiveCheck: never = value
  throw new Error(`Unhandled ${componentName} type for value [${exhaustiveCheck}]`)
}
