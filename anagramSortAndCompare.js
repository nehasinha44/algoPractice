function anagramSortAndCompare (s1, s2) {
  if (s1.length !== s2.length) return false

  const sortedS1 = s1.split('').sort()
  const sortedS2 = s2.split('').sort()

  for (let i = 0; i < sortedS1.length; i++) {
    if (sortedS1[i] !== sortedS2[i]) return false
  }

  return true
}

anagramSortAndCompare('abcde', 'edcba');