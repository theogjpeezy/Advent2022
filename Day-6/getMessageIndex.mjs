export const getMessageIndex = (text, uniqueCharLength) => {
  for(let i = 0; i < text.length - uniqueCharLength - 1; i++) {
    const size = new Set(text.substring(i, i + uniqueCharLength)).size;
    if (size === uniqueCharLength) return i + uniqueCharLength;
  }
}