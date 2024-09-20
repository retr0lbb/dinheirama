export function generateRandomId(): string {
  const validLetters =
    'abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lengt = 6
  let id = ''
  for (let i = 0; i <= lengt; i++) {
    const randomIndex = Math.floor(Math.random() * validLetters.length)

    id += validLetters[randomIndex]
  }
  return id
}
