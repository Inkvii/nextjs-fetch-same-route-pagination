export {}

type StringBoolean = "false" | "true"

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_VERSION: string
    }
  }
}
