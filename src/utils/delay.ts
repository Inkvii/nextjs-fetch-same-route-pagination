export function mockDelay<T>(
  response: T,
  isSuccessful = true,
  min: number = 500,
  max: number = 2000
): Promise<T & { timestamp: number }> {
  return new Promise(
    (resolve: (value: T & { timestamp: number }) => void, reject: (value: T & { timestamp: number }) => void) => {
      setTimeout(
        () => {
          if (isSuccessful) {
            resolve({ ...response, timestamp: new Date().getTime() })
          } else {
            reject({ ...response, timestamp: new Date().getTime() })
          }
        },
        Math.ceil(Math.random() * max + min)
      )
    }
  )
}