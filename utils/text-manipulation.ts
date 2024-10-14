export const subStringText = (text: string, count?: number) => {
  const countNumber = count || 3
  const first = text.substring(0, countNumber)
  const last = text.slice(-countNumber)

  return `${first}******${last}`
}