export function useLogger() {
  const config = useRuntimeConfig()
  const isProduction = config.public.nodeEnv === "production"

  const logger = (...args: any[]) => {
    if (isProduction) return
    console.log(...args)
  }

  return {
    logger,
  }
}
